import { Issue, IssueFilterOptions } from '../../../domain/model/issue';
import IssueDataSource from '../issue-data-source';
import { IssueAPIEntity } from './entity/issue-api-entity';
import supabase from './supabase-db/supabase';
import { injectable } from 'inversify';
@injectable()
export default class IssueDataSourceImpl implements IssueDataSource {
  async getIssues(filterOptions: IssueFilterOptions) {
    const { label, milestone, isOpen } = filterOptions;

    const labelInner = label && label.value !== 'none' ? '!inner' : '';
    const milestoneInner =
      milestone && milestone.value !== 'none' ? '!inner' : '';

    let query = supabase
      .from('issues')
      .select(
        `id, title, is_open, created_at, labels${labelInner}(id, title, text_color, background_color), milestones${milestoneInner}(id, title)`
      );

    query = this.applyFilterOptions(query, filterOptions);

    if (isOpen === true) query = query.eq('is_open', true);
    if (isOpen === false) query = query.eq('is_open', false);

    let openIssueCountQuery = supabase
      .from('issues')
      .select(
        `labels${labelInner}(id, title, text_color, background_color), milestones${milestoneInner}(id, title)`,
        { count: 'exact' }
      );

    openIssueCountQuery = this.applyFilterOptions(
      openIssueCountQuery,
      filterOptions
    );

    openIssueCountQuery.eq('is_open', true);

    let closeIssueCountQuery = supabase
      .from('issues')
      .select(
        `labels${labelInner}(id, title, text_color, background_color), milestones${milestoneInner}(id, title)`,
        { count: 'exact' }
      );

    closeIssueCountQuery = this.applyFilterOptions(
      closeIssueCountQuery,
      filterOptions
    );

    closeIssueCountQuery.eq('is_open', false);

    const [
      { data, error },
      { count: openIssueCount, error: openIssueCountQueryError },
      { count: closeIssueCount, error: closeIssueCountQueryError },
    ] = await Promise.all([query, openIssueCountQuery, closeIssueCountQuery]);

    if (error || openIssueCountQueryError || closeIssueCountQueryError) {
      throw new Error('이슈를 불러오지 못했습니다.');
    }

    return { data, openIssueCount, closeIssueCount } as IssueAPIEntity;
  }

  async openIssues(ids: Brand<number, Issue>[]): Promise<void> {
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

  async closeIssues(ids: Brand<number, Issue>[]): Promise<void> {
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

  private applyFilterOptions(query: any, filterOptions: IssueFilterOptions) {
    const { label, milestone, likes } = filterOptions;

    if (label) {
      if (label.value !== 'none')
        query = query.eq(`labels.${label.property}`, label.value);
      else query = query.is(`labels`, null);
    }

    if (milestone) {
      if (milestone.value !== 'none')
        query = query.eq(`milestones.${milestone.property}`, milestone.value);
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
