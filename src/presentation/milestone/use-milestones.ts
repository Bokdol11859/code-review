import { useQuery } from '@tanstack/react-query';

import { container } from '../../di/inversify.config';
import { TYPES } from '../../di/types';
import { GetMilestones } from '../../domain/use-case/milestones/get-milestones';

export default function useMilestones() {
  const getMilestonesUseCase = container.get<GetMilestones>(
    TYPES.GetMilestonesUseCase
  );

  const {
    isLoading,
    data: milestones,
    error,
  } = useQuery({
    queryKey: ['milestones'],
    queryFn: () => getMilestonesUseCase.invoke(),
  });

  return {
    isLoading,
    milestones,
    error,
  };
}
