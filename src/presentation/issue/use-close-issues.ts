import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Issue } from '../../domain/model/issue';
import { container } from '../../di/inversify.config';
import { CloseIssuesUseCase } from '../../domain/use-case/issues/close-issues';
import { TYPES } from '../../di/types';

export default function useCloseIssues() {
  const closeIssuesUseCase = container.get<CloseIssuesUseCase>(
    TYPES.CloseIssuesUseCase
  );

  const queryClient = useQueryClient();

  const { mutate: closeIssues, isPending: isClosing } = useMutation({
    mutationFn: (ids: Issue['id'][]) => closeIssuesUseCase.invoke(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['issues'] });
    },
  });

  return { closeIssues, isClosing };
}
