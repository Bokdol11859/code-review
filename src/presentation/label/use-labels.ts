import { useQuery } from '@tanstack/react-query';
import LabelDataSourceImpl from '../../data/data-source/api/label-data-source-impl';
import { LabelRepositoryImpl } from '../../data/repository/label-repository-impl';
import { GetLabels } from '../../domain/use-case/labels/get-labels';

export default function useLabels() {
  const labelsDataSourceImpl = new LabelDataSourceImpl();
  const labelsRepositoryImpl = new LabelRepositoryImpl(labelsDataSourceImpl);

  const getLabelsUseCase = new GetLabels(labelsRepositoryImpl);

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
