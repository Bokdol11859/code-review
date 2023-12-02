import { useQuery } from '@tanstack/react-query';
import MilestoneDataSourceImpl from '../../data/data-source/api/milestone-data-source-impl';
import { MilestoneRepositoryImpl } from '../../data/repository/milestone-repository-impl';
import { GetMilestones } from '../../domain/use-case/milestones/get-milestones';

export default function useMilestones() {
  const milestonesDataSourceImpl = new MilestoneDataSourceImpl();
  const milestonesRepositoryImpl = new MilestoneRepositoryImpl(
    milestonesDataSourceImpl
  );

  const getMilestonesUseCase = new GetMilestones(milestonesRepositoryImpl);

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
