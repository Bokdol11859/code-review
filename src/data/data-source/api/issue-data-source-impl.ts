import { Issue } from '../../../domain/model/issue';
import {
  IssueCreationData,
  IssueFilterOptions,
} from '../../../domain/repository/issue-repository';
import IssueDataSource from '../issue-data-source';
import {
  IssueDetailEntity,
  IssueSummaryEntity,
} from '../../entity/issue-api-entity';
import supabase from './supabase-db/supabase';
import { injectable } from 'inversify';

// TODO: 타입 오류 해결
@injectable()
export default class IssueDataSourceImpl implements IssueDataSource {
  async getIssue(id: Issue['id']) {
    const dataQuery = this.buildGetIssueQuery(id);
    const { data, error } = await dataQuery;

    if (error) throw new Error('이슈를 불러오지 못했습니다.');

    return {
      data,
    } as unknown as IssueDetailEntity;
  }

  async getIssues(filterOptions: IssueFilterOptions) {
    const dataQuery = this.buildGetIssuesQuery(filterOptions);

    const openIssueCountQuery =
      this.buildGetOpenIssuesCountQuery(filterOptions);
    const closeIssueCountQuery =
      this.buildGetCloseIssuesCountQuery(filterOptions);

    const [
      { data, error },
      { count: openIssueCount, error: openIssueCountQueryError },
      { count: closeIssueCount, error: closeIssueCountQueryError },
    ] = await Promise.all([
      dataQuery,
      openIssueCountQuery,
      closeIssueCountQuery,
    ]);

    if (error || openIssueCountQueryError || closeIssueCountQueryError) {
      throw new Error('이슈를 불러오지 못했습니다.');
    }

    return {
      data,
      openIssueCount,
      closeIssueCount,
    } as unknown as IssueSummaryEntity;
  }

  async openIssues(ids: Issue['id'][]): Promise<void> {
    const toUpsert = ids.map((id) => {
      return {
        id,
        is_open: true,
      };
    });

    const { error } = await supabase.from('issues').upsert(toUpsert);

    if (error) {
      throw new Error('이슈를 열지 못했습니다.');
    }

    return;
  }

  async closeIssues(ids: Issue['id'][]): Promise<void> {
    const toUpsert = ids.map((id) => {
      return {
        id,
        is_open: false,
      };
    });

    const { error } = await supabase.from('issues').upsert(toUpsert);

    if (error) {
      throw new Error('이슈를 닫지 못했습니다.');
    }

    return;
  }

  async createIssue(newIssue: IssueCreationData): Promise<void> {
    const { title, contents, labelId, milestoneId } = newIssue;

    const { error } = await supabase.from('issues').insert({
      title,
      contents,
      label_id: labelId,
      milestone_id: milestoneId,
    });

    if (error) throw new Error('이슈를 생성하지 못했습니다.');

    return;
  }

  private buildGetIssueQuery(id: Issue['id']) {
    const query = supabase
      .from('issues')
      .select(
        'id, title, is_open, created_at, labels(id,title, text_color, background_color), milestone(id,title)'
      );

    return query;
  }

  private buildGetIssuesQuery(filterOptions: IssueFilterOptions) {
    const { isOpen } = filterOptions;
    const { labelInner, milestoneInner } = this.determineInner(filterOptions);

    let query = supabase
      .from('issues')
      .select(
        `id, title, is_open, created_at, labels${labelInner}(id, title, text_color, background_color), milestones${milestoneInner}(id, title)`
      );

    query = this.applyFilterOptions(query, filterOptions);

    if (isOpen === true) query = query.eq('is_open', true);
    if (isOpen === false) query = query.eq('is_open', false);

    return query;
  }

  private buildGetOpenIssuesCountQuery(filterOptions: IssueFilterOptions) {
    const { labelInner, milestoneInner } = this.determineInner(filterOptions);

    let query = supabase
      .from('issues')
      .select(
        `labels${labelInner}(id, title, text_color, background_color), milestones${milestoneInner}(id, title)`,
        { count: 'exact' }
      );

    query = this.applyFilterOptions(query, filterOptions);

    query.eq('is_open', true);

    return query;
  }

  private buildGetCloseIssuesCountQuery(filterOptions: IssueFilterOptions) {
    const { labelInner, milestoneInner } = this.determineInner(filterOptions);

    let query = supabase
      .from('issues')
      .select(
        `labels${labelInner}(id, title, text_color, background_color), milestones${milestoneInner}(id, title)`,
        { count: 'exact' }
      );

    query = this.applyFilterOptions(query, filterOptions);

    query.eq('is_open', false);

    return query;
  }

  private determineInner(filterOptions: IssueFilterOptions) {
    const { labelTitle, milestoneTitle } = filterOptions;

    const labelInner = labelTitle && labelTitle !== 'none' ? '!inner' : '';
    const milestoneInner =
      milestoneTitle && milestoneTitle !== 'none' ? '!inner' : '';

    return {
      labelInner,
      milestoneInner,
    };
  }

  private applyFilterOptions(query: any, filterOptions: IssueFilterOptions) {
    const { labelTitle, milestoneTitle, likes } = filterOptions;

    if (labelTitle) {
      if (labelTitle !== 'none') query = query.eq('labels.title', labelTitle);
      else query = query.is(`labels`, null);
    }

    if (milestoneTitle) {
      if (milestoneTitle !== 'none')
        query = query.eq(`milestones.title`, milestoneTitle);
      else query = query.is('milestones', null);
    }

    if (likes?.length) {
      const likesFilterColumns = ['contents', 'title'];

      const likesFilterQuery = likesFilterColumns
        .map((likesFilterColumn) => {
          const andQuery = likes
            .map((like) => `${likesFilterColumn}.ilike.%${like}%`)
            .join(',');

          return `and(${andQuery})`;
        })
        .join(', ');

      query = query.or(likesFilterQuery);
    }

    return query;
  }
}
