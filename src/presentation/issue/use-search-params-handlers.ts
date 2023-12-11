import { useSearchParams } from 'react-router-dom';
import { Label } from '../../domain/model/label';
import { Milestone } from '../../domain/model/milestone';
import { IssueFilterOptions } from '../../domain/model/issue';

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

    const initialFilter: IssueFilterOptions = {
      likes: [],
    };

    const addTermToFilter = (filter: IssueFilterOptions, term: string) => {
      const [key, value] = term.split(':');

      switch (key) {
        case '':
          break;

        case 'isOpen':
          if (value === 'open') filter.isOpen = true;
          if (value === 'close') filter.isOpen = false;
          break;

        case 'label':
          filter.label = { property: 'title', value };
          break;

        case 'milestone':
          filter.milestone = { property: 'title', value };
          break;

        default:
          filter.likes!.push(term);
          break;
      }

      return filter;
    };

    return terms.reduce<IssueFilterOptions>(addTermToFilter, initialFilter);
  };

  const applySearchQuery = (searchQuery: string) => {
    const { isOpen, label, likes, milestone } = parseSearchQuery(searchQuery);
    deleteAllSearchParams();

    if (isOpen !== undefined) setOpenStatusSearchParam(isOpen);
    if (label) setLabelSearchParam(label.value);
    if (milestone) setMilestoneSearchParam(milestone.value);
    if (likes?.length) setLikeSearchParams(likes);
  };

  const getFilterOptions = () => {
    const filterOptions: IssueFilterOptions = {};

    if (isCloseStatus) filterOptions.isOpen = false;
    if (isOpenStatus) filterOptions.isOpen = true;

    const labelSearchParam = getLabelSearchParam();
    if (labelSearchParam)
      filterOptions.label = {
        property: 'title',
        value: labelSearchParam,
      };

    const milestoneSearchParam = getMilestoneSearchParam();
    if (milestoneSearchParam)
      filterOptions.milestone = {
        property: 'title',
        value: milestoneSearchParam,
      };

    const likeSearchParmas = getLikeSearchParams();
    if (likeSearchParmas) filterOptions.likes = likeSearchParmas;

    return filterOptions;
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
    getFilterOptions,
  };
}
