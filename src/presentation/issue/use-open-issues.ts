import { useMutation, useQueryClient } from '@tanstack/react-query';
import IssueDataSourceImpl from '../../data/data-source/api/issue-data-source-impl';
import { IssueRepositoryImpl } from '../../data/repository/issue-repository-impl';
import { OpenIssues } from '../../domain/use-case/issues/open-issues';
import { Issue } from '../../domain/model/issue';

export default function useOpenIssues() {
  const issuesDataSourceImpl = new IssueDataSourceImpl();
  const issuesRepositoryImpl = new IssueRepositoryImpl(issuesDataSourceImpl);

  const openIssuesUseCase = new OpenIssues(issuesRepositoryImpl);

  const queryClient = useQueryClient();

  const { mutate: openIssues, isPending: isOpening } = useMutation({
    mutationFn: (ids: Brand<number, Issue>[]) => openIssuesUseCase.invoke(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['issues'] });
    },
  });

  return { openIssues, isOpening };
}
