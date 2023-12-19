import { Container } from 'inversify';
import IssueDataSourceImpl from '../data/data-source/api/issue-data-source-impl';
import IssueDataSource from '../data/data-source/issue-data-source';
import { IssueRepository } from '../domain/repository/issue-repository';
import { IssueRepositoryImpl } from '../data/repository/issue-repository-impl';
import {
  GetIssues,
  GetIssuesUseCase,
} from '../domain/use-case/issues/get-issues';
import {
  CloseIssues,
  CloseIssuesUseCase,
} from '../domain/use-case/issues/close-issues';
import {
  OpenIssues,
  OpenIssuesUseCase,
} from '../domain/use-case/issues/open-issues';
import { TYPES } from './types';
import LabelDataSource from '../data/data-source/label-data-source';
import LabelDataSourceImpl from '../data/data-source/api/label-data-source-impl';
import { LabelRepository } from '../domain/repository/label-repository';
import { LabelRepositoryImpl } from '../data/repository/label-repository-impl';
import {
  GetLabels,
  GetLabelsUseCase,
} from '../domain/use-case/labels/get-labels';
import {
  GetMilestones,
  GetMilestonesUseCase,
} from '../domain/use-case/milestones/get-milestones';
import { MilestoneRepository } from '../domain/repository/milestone-repository';
import MilestoneDataSourceImpl from '../data/data-source/api/milestone-data-source-impl';
import MilestoneDataSource from '../data/data-source/milestone-data-source';
import { MilestoneRepositoryImpl } from '../data/repository/milestone-repository-impl';
import {
  CreateIssue,
  CreateIssueUseCase,
} from '../domain/use-case/issues/create-issue';

const container = new Container();

container.bind<IssueDataSource>(TYPES.IssueDataSource).to(IssueDataSourceImpl);
container.bind<IssueRepository>(TYPES.IssueRepository).to(IssueRepositoryImpl);
container.bind<GetIssuesUseCase>(TYPES.GetIssuesUseCase).to(GetIssues);
container.bind<CloseIssuesUseCase>(TYPES.CloseIssuesUseCase).to(CloseIssues);
container.bind<OpenIssuesUseCase>(TYPES.OpenIssuesUseCase).to(OpenIssues);
container.bind<CreateIssueUseCase>(TYPES.CreateIssueUseCase).to(CreateIssue);

container.bind<LabelDataSource>(TYPES.LabelDataSource).to(LabelDataSourceImpl);
container.bind<LabelRepository>(TYPES.LabelRepository).to(LabelRepositoryImpl);
container.bind<GetLabelsUseCase>(TYPES.GetLabelsUseCase).to(GetLabels);

container
  .bind<MilestoneDataSource>(TYPES.MilestoneDataSource)
  .to(MilestoneDataSourceImpl);
container
  .bind<MilestoneRepository>(TYPES.MilestoneRepository)
  .to(MilestoneRepositoryImpl);
container
  .bind<GetMilestonesUseCase>(TYPES.GetMilestonesUseCase)
  .to(GetMilestones);

export { container };
