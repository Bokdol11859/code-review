import { Issue } from '../../domain/model/issue';
import { IssueRepository } from '../../domain/repository/issue-repository';
import { Database } from '../data-source/api/supabase-db/database.types';
import IssueDataSource from '../data-source/issue-data-source';

export class IssueRepositoryImpl implements IssueRepository {
  constructor(private datasource: IssueDataSource) {}

  async getIssues() {
    const data = await this.datasource.getIssues();

    return this.mapToDomainModel(data);
  }

  async openIssues(ids: Brand<number, Issue>[]) {
    return this.datasource.openIssues(ids);
  }

  async closeIssues(ids: Brand<number, Issue>[]): Promise<void> {
    return this.datasource.closeIssues(ids);
  }

  private mapToDomainModel(
    data: Database['public']['Tables']['issues']['Row'][]
  ): Issue[] {
    return data.map(({ id, title, created_at, is_open }) => {
      return {
        id: id as Brand<number, Issue>,
        title,
        isOpen: is_open,
        createdAt: new Date(created_at),
      };
    });
  }
}
