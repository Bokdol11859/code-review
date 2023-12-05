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

  const isOpenFilterOption = searchParams.get('isOpen');
  const labelFilterOption = searchParams.get('label');
  const milestoneFilterOption = searchParams.get('milestone');

  if (isOpenFilterOption === 'close') filterOptions.isOpen = false;
  else filterOptions.isOpen = true;

  if (labelFilterOption)
    filterOptions.label = {
      property: 'title',
      value: labelFilterOption,
    };

  if (milestoneFilterOption)
    filterOptions.milestone = {
      property: 'title',
      value: milestoneFilterOption,
    };

  const {
    isLoading,
    data: { data: issues, openIssueCount, closeIssueCount } = {},
    error,
  } = useQuery({
    queryKey: ['issues', filterOptions],
    queryFn: () => getIssuesUseCase.invoke(filterOptions),
  });

  return {
    isLoading,
    issues,
    openIssueCount,
    closeIssueCount,
    error,
  };
}
