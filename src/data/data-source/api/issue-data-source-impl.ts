import { Issue, IssueFilterOptions } from '../../../domain/model/issue';
import IssueDataSource from '../issue-data-source';
import { IssueAPIEntity } from './entity/issue-api-entity';
import supabase from './supabase-db/supabase';

export default class IssueDataSourceImpl implements IssueDataSource {
  async getIssues(filterOptions: IssueFilterOptions) {
    const { label } = filterOptions;

    let inner = '';
    if (label && label.value !== 'none') inner = '!inner';

    let query = supabase
      .from('issues')
      .select(
        `id, title, is_open, created_at, labels${inner}(id, title, text_color, background_color), milestones(id, title)`
      );

    if (label) {
      if (label.value !== 'none')
        query = query.eq(`labels.${label.property}`, label.value);
      else {
        query = query.is(`labels`, null);
      }
    }

    const { data, error } = await query;

    if (error) {
      throw new Error('이슈를 불러오지 못했습니다.');
    }

    return data as unknown as IssueAPIEntity[];
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
}
