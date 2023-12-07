import { useSearchParams } from 'react-router-dom';
import { Label } from '../../domain/model/label';
import { Milestone } from '../../domain/model/milestone';

export default function useSearchParamsHandlers() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setLabelSearchParam = (value: Label['title']) => {
    if (searchParams.get('label') === value) {
      searchParams.delete('label');
    } else {
      searchParams.set('label', value);
    }
    setSearchParams(searchParams);
  };

  const setMilestoneSearchParam = (value: Milestone['title']) => {
    if (searchParams.get('milestone') === value) {
      searchParams.delete('milestone');
    } else {
      searchParams.set('milestone', value);
    }
    setSearchParams(searchParams);
  };

  const setOpenStatusSearchParam = (isOpen: boolean) => {
    searchParams.set('isOpen', isOpen ? 'open' : 'close');
    setSearchParams(searchParams);
  };

  return {
    setLabelSearchParam,
    setMilestoneSearchParam,
    setOpenStatusSearchParam,
  };
}
