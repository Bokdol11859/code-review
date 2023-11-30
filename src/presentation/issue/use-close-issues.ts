import { useMutation } from '@tanstack/react-query';
import IssueDataSourceImpl from '../../data/data-source/api/issue-data-source-impl';
import { IssueRepositoryImpl } from '../../data/repository/issue-repository-impl';
import { Issue } from '../../domain/model/issue';
import { CloseIssues } from '../../domain/use-case/issues/close-issues';

export default function useCloseIssues() {
  const issuesDataSourceImpl = new IssueDataSourceImpl();
  const issuesRepositoryImpl = new IssueRepositoryImpl(issuesDataSourceImpl);

  const closeIssuesUseCase = new CloseIssues(issuesRepositoryImpl);

  const { mutate: closeIssues, isPending: isClosing } = useMutation({
    mutationFn: (ids: Brand<number, Issue>[]) => closeIssuesUseCase.invoke(ids),
  });

  return { closeIssues, isClosing };
}
