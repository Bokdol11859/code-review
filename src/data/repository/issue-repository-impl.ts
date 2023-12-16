import { inject, injectable } from 'inversify';
import { Issue, IssueFilterOptions, NewIssue } from '../../domain/model/issue';
import { IssueRepository } from '../../domain/repository/issue-repository';
import { IssueAPIEntity } from '../data-source/api/entity/issue-api-entity';
import type IssueDataSource from '../data-source/issue-data-source';
import { TYPES } from '../../di/types';

@injectable()
export class IssueRepositoryImpl implements IssueRepository {
  private _datasource: IssueDataSource;

  constructor(@inject(TYPES.IssueDataSource) dataSource: IssueDataSource) {
    this._datasource = dataSource;
  }

  async getIssues(filterOptions: IssueFilterOptions): Promise<{
    data: Issue[];
    openIssueCount: number;
    closeIssueCount: number;
  }> {
    const { data, openIssueCount, closeIssueCount } =
      await this._datasource.getIssues(filterOptions);

    return this.mapEntityToModel({ data, openIssueCount, closeIssueCount });
  }

  async openIssues(ids: Brand<number, Issue>[]) {
    return this._datasource.openIssues(ids);
  }

  async closeIssues(ids: Brand<number, Issue>[]): Promise<void> {
    return this._datasource.closeIssues(ids);
  }
  async createIssue(newIssue: NewIssue): Promise<void> {
    return this._datasource.createIssue(newIssue);
  }

  private mapEntityToModel(entity: IssueAPIEntity): {
    data: Issue[];
    openIssueCount: number;
    closeIssueCount: number;
  } {
    const { data, openIssueCount, closeIssueCount } = entity;

    return {
      data: data.map(
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
      ),
      openIssueCount,
      closeIssueCount,
    };
  }
}
