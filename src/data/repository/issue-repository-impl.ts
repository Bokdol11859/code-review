import { Issue } from '../../domain/model/issue';
import { IssueRepository } from '../../domain/repository/issue-repository';
import { IssueAPIEntity } from '../data-source/api/entity/issue-api-entity';
import IssueDataSource from '../data-source/issue-data-source';

export class IssueRepositoryImpl implements IssueRepository {
  constructor(private datasource: IssueDataSource) {}

  async getIssues() {
    const data = await this.datasource.getIssues();

    return this.mapEntityToModel(data);
  }

  async openIssues(ids: Brand<number, Issue>[]) {
    return this.datasource.openIssues(ids);
  }

  async closeIssues(ids: Brand<number, Issue>[]): Promise<void> {
    return this.datasource.closeIssues(ids);
  }

  private mapEntityToModel(data: IssueAPIEntity[]): Issue[] {
    return data.map(
      ({ id, title, created_at, is_open, labels, milestones }) => {
        return {
          id: id as Brand<number, Issue>,
          title,
          isOpen: is_open,
          createdAt: new Date(created_at),
          label: labels
            ? {
                id: labels.id,
                title: labels.title,
                textColor: labels.text_color,
                backgroundColor: labels.background_color,
              }
            : null,
          milestone: milestones
            ? { id: milestones.id, title: milestones.title }
            : null,
        };
      }
    );
  }
}
