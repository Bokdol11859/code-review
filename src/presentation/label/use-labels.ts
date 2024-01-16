import { useQuery } from '@tanstack/react-query';
import { GetLabelsUseCase } from '../../domain/use-case/labels/get-labels';
import { container } from '../../di/inversify.config';
import { TYPES } from '../../di/types';

export default function useLabels() {
  const getLabelsUseCase = container.get<GetLabelsUseCase>(
    TYPES.GetLabelsUseCase
  );

  const {
    isLoading,
    data: labels,
    error,
  } = useQuery({
    queryKey: ['labels'],
    queryFn: () => getLabelsUseCase.invoke(),
  });

  return {
    isLoading,
    labels,
    error,
  };
}
