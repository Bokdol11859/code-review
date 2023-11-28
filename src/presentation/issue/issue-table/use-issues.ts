import IssueDataSourceImpl from '../../../data/data-source/api/issue-data-source-impl';
import { IssueRepositoryImpl } from '../../../data/repository/issue-repository-impl';

import { GetIssues } from '../../../domain/use-case/issues/get-issues';
import { useQuery } from '@tanstack/react-query';

export default function useIssues() {
  const issuesDataSourceImpl = new IssueDataSourceImpl();
  const issuesRepositoryImpl = new IssueRepositoryImpl(issuesDataSourceImpl);

  const getIssuesUseCase = new GetIssues(issuesRepositoryImpl);

  const {
    isLoading,
    data: issues,
    error,
  } = useQuery({
    queryKey: ['issues'],
    queryFn: () => getIssuesUseCase.invoke(),
  });

  return {
    isLoading,
    issues,
    error,
  };
}
