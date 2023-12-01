import { Issue } from '../../../domain/model/issue';
import IssueDataSource from '../issue-data-source';
import supabase from './supabase-db/supabase';

export default class IssueDataSourceImpl implements IssueDataSource {
  async getIssues() {
    const { data, error } = await supabase.from('issues').select('*');

    if (error) {
      throw new Error('이슈를 불러오지 못했습니다.');
    }

    return data;
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
