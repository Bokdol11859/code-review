import { useSearchParams } from 'react-router-dom';
import IssueDataSourceImpl from '../../data/data-source/api/issue-data-source-impl';
import { IssueRepositoryImpl } from '../../data/repository/issue-repository-impl';

import { GetIssues } from '../../domain/use-case/issues/get-issues';
import { useQuery } from '@tanstack/react-query';
import { IssueFilterOptions } from '../../domain/model/issue';

export default function useIssues() {
  const issuesDataSourceImpl = new IssueDataSourceImpl();
  const issuesRepositoryImpl = new IssueRepositoryImpl(issuesDataSourceImpl);

  const getIssuesUseCase = new GetIssues(issuesRepositoryImpl);

  const [searchParams] = useSearchParams();

  const filterOptions: IssueFilterOptions = {};

  const labelTitle = searchParams.get('label');
  const milestoneTitle = searchParams.get('milestone');

  if (labelTitle)
    filterOptions.label = {
      property: 'title',
      value: labelTitle,
    };

  if (milestoneTitle)
    filterOptions.milestone = {
      property: 'title',
      value: milestoneTitle,
    };

  const {
    isLoading,
    data: issues,
    error,
  } = useQuery({
    queryKey: ['issues', filterOptions],
    queryFn: () => getIssuesUseCase.invoke(filterOptions),
  });

  return {
    isLoading,
    issues,
    error,
  };
}
