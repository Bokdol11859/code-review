import { GetIssuesUseCase } from '../../domain/use-case/issues/get-issues';
import { useQuery } from '@tanstack/react-query';
import { IssueFilterOptions } from '../../domain/model/issue';
import useSearchParamsHandlers from './use-search-params-handlers';
import { container } from '../../di/inversify.config';
import { TYPES } from '../../di/types';

export default function useIssues() {
  const getIssuesUseCase = container.get<GetIssuesUseCase>(
    TYPES.GetIssuesUseCase
  );

  const {
    isOpenStatus,
    isCloseStatus,
    getLabelSearchParam,
    getMilestoneSearchParam,
    getLikeSearchParams,
  } = useSearchParamsHandlers();

  const filterOptions: IssueFilterOptions = {};

  if (isCloseStatus) filterOptions.isOpen = false;
  if (isOpenStatus) filterOptions.isOpen = true;

  const labelSearchParam = getLabelSearchParam();
  if (labelSearchParam)
    filterOptions.label = {
      property: 'title',
      value: labelSearchParam,
    };

  const milestoneSearchParam = getMilestoneSearchParam();
  if (milestoneSearchParam)
    filterOptions.milestone = {
      property: 'title',
      value: milestoneSearchParam,
    };

  const likeSearchParmas = getLikeSearchParams();
  if (likeSearchParmas) filterOptions.likes = likeSearchParmas;

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
