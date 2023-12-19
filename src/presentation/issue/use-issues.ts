import { GetIssuesUseCase } from '../../domain/use-case/issues/get-issues';
import { useQuery } from '@tanstack/react-query';
import useSearchParamsHandlers from './use-search-params-handlers';
import { container } from '../../di/inversify.config';
import { TYPES } from '../../di/types';

export default function useIssues() {
  const getIssuesUseCase = container.get<GetIssuesUseCase>(
    TYPES.GetIssuesUseCase
  );

  const { getFilterOptions } = useSearchParamsHandlers();

  const filterOptions = getFilterOptions();

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
