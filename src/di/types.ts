export const TYPES = {
  IssueDataSource: Symbol.for('IssueDataSource'),
  IssueRepository: Symbol.for('IssueRepository'),
  GetIssuesUseCase: Symbol.for('GetIssuesUseCase'),
  OpenIssuesUseCase: Symbol.for('OpenIssuesUseCase'),
  CloseIssuesUseCase: Symbol.for('CloseIssuesUseCase'),

  LabelDataSource: Symbol.for('LabelDataSource'),
  LabelRepository: Symbol.for('LabelRepository'),
  GetLabelsUseCase: Symbol.for('GetLabelsUseCase'),

  MilestoneDataSource: Symbol.for('MilestoneDataSource'),
  MilestoneRepository: Symbol.for('MilestoneRepository'),
  GetMilestonesUseCase: Symbol.for('GetMilestonesUseCase'),
};
