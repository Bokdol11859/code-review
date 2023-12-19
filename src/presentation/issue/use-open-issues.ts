import { useMutation, useQueryClient } from '@tanstack/react-query';
import { OpenIssuesUseCase } from '../../domain/use-case/issues/open-issues';
import { Issue } from '../../domain/model/issue';
import { container } from '../../di/inversify.config';
import { TYPES } from '../../di/types';

export default function useOpenIssues() {
  const openIssuesUseCase = container.get<OpenIssuesUseCase>(
    TYPES.OpenIssuesUseCase
  );
  const queryClient = useQueryClient();

  const { mutate: openIssues, isPending: isOpening } = useMutation({
    mutationFn: (ids: Issue['id'][]) => openIssuesUseCase.invoke(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['issues'] });
    },
  });

  return { openIssues, isOpening };
}
