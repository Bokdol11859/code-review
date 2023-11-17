import { Issue } from '../../../domain/model/issue';
import IssueDataSource from '../issue-data-source';
import supabase from './supabase-db/supabase';

export default class IssueDataSourceImpl implements IssueDataSource {
  async getIssues(): Promise<Issue[]> {
    const { data, error } = await supabase.from('issues').select('*');

    if (error) {
      console.error(error);
      throw new Error('이슈를 불러오지 못했습니다.');
    }

    return data.map(({ id, title, created_at }) => {
      return { id, title, createdAt: new Date(created_at) };
    });
  }
}
