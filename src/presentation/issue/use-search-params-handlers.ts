import { useSearchParams } from 'react-router-dom';
import { Label } from '../../domain/model/label';
import { Milestone } from '../../domain/model/milestone';

interface SearchFilter {
  label: string | null;
  milestone: string | null;
  isOpen: boolean | null;
  likes: string[];
}

export default function useSearchParamsHandlers() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getOpenStatusSearchParam = () => searchParams.get('isOpen');
  const getLabelSearchParam = () => searchParams.get('label');
  const getMilestoneSearchParam = () => searchParams.get('milestone');
  const getLikeSearchParams = () => searchParams.getAll('like');

  const setOpenStatusSearchParam = (isOpen: boolean | null) => {
    if (isOpen === null) {
      searchParams.delete('isOpen');
    } else {
      searchParams.set('isOpen', isOpen ? 'open' : 'close');
    }
    setSearchParams(searchParams);
  };

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

  const setLikeSearchParams = (values: string[]) => {
    searchParams.delete('like');
    values.forEach((value) => searchParams.append('like', value));
    setSearchParams(searchParams);
  };

  const deleteAllSearchParams = () => {
    searchParams.delete('isOpen');
    searchParams.delete('like');
    searchParams.delete('label');
    searchParams.delete('milestone');
    setSearchParams(searchParams);
  };

  const parseSearchQuery = (query: string) => {
    const terms = query.split(' ');

    const initialFilter: SearchFilter = {
      label: null,
      milestone: null,
      isOpen: null,
      likes: [],
    };

    const addTermToFilter = (filter: SearchFilter, term: string) => {
      const [key, value] = term.split(':');

      switch (key) {
        case '':
          break;

        case 'isOpen':
          if (value === 'open') filter.isOpen = true;
          if (value === 'close') filter.isOpen = false;
          break;

        case 'label':
          filter.label = value;
          break;

        case 'milestone':
          filter.milestone = value;
          break;

        default:
          filter.likes.push(term);
          break;
      }

      return filter;
    };

    return terms.reduce<SearchFilter>(addTermToFilter, initialFilter);
  };

  const applySearchQuery = (searchQuery: string) => {
    const { isOpen, label, likes, milestone } = parseSearchQuery(searchQuery);
    deleteAllSearchParams();

    if (isOpen !== null) setOpenStatusSearchParam(isOpen);
    if (label) setLabelSearchParam(label);
    if (milestone) setMilestoneSearchParam(milestone);
    if (likes.length) setLikeSearchParams(likes);
  };

  const isOpenStatus = getOpenStatusSearchParam() === 'open';
  const isCloseStatus = getOpenStatusSearchParam() === 'close';
  const isUnLabeld = getLabelSearchParam() === 'none';
  const isNotWithMilestone = getMilestoneSearchParam() === 'none';

  const hasLabelSearchParam = searchParams.has('label');
  const hasMilestoneSearchParam = searchParams.has('milestone');
  const hasLikeSearchParam = searchParams.has('like');

  return {
    getOpenStatusSearchParam,
    getLabelSearchParam,
    getMilestoneSearchParam,
    getLikeSearchParams,

    setLabelSearchParam,
    setMilestoneSearchParam,
    setOpenStatusSearchParam,
    setLikeSearchParams,
    deleteAllSearchParams,

    isOpenStatus,
    isCloseStatus,
    isUnLabeld,
    isNotWithMilestone,
    hasLabelSearchParam,
    hasMilestoneSearchParam,
    hasLikeSearchParam,

    applySearchQuery,
  };
}
