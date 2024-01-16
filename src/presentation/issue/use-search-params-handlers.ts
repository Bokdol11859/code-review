import { useSearchParams } from 'react-router-dom';
import { Label } from '../../domain/model/label';
import { Milestone } from '../../domain/model/milestone';
import { IssueFilterOptions } from '../../domain/repository/issue-repository';

export const OPEN_STATUS_KEY = 'isOpen';
export const LABEL_KEY = 'label';
export const MILESTONE_KEY = 'milestone';
export const LIKE_KEY = 'like';
export const OPEN = 'open';
export const CLOSE = 'close';

export default function useSearchParamsHandlers() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getOpenStatusSearchParam = () => searchParams.get(OPEN_STATUS_KEY);
  const getLabelSearchParam = () => searchParams.get(LABEL_KEY);
  const getMilestoneSearchParam = () => searchParams.get(MILESTONE_KEY);
  const getLikeSearchParams = () => searchParams.getAll(LIKE_KEY);

  const setOpenStatusSearchParam = (isOpen: boolean | null) => {
    if (isOpen === null) {
      searchParams.delete(OPEN_STATUS_KEY);
    } else {
      searchParams.set(OPEN_STATUS_KEY, isOpen ? OPEN : CLOSE);
    }
    setSearchParams(searchParams);
  };

  const toggleLabelSearchParam = (value: Label['title']) => {
    if (searchParams.get(LABEL_KEY) === value) {
      searchParams.delete(LABEL_KEY);
    } else {
      searchParams.set(LABEL_KEY, value);
    }
    setSearchParams(searchParams);
  };

  const toggleMilestoneSearchParam = (value: Milestone['title']) => {
    if (searchParams.get(MILESTONE_KEY) === value) {
      searchParams.delete(MILESTONE_KEY);
    } else {
      searchParams.set(MILESTONE_KEY, value);
    }
    setSearchParams(searchParams);
  };

  const setLikeSearchParams = (values: string[]) => {
    searchParams.delete(LIKE_KEY);
    values.forEach((value) => searchParams.append(LIKE_KEY, value));
    setSearchParams(searchParams);
  };

  const initSearchParams = () => {
    searchParams.delete(OPEN_STATUS_KEY);
    searchParams.delete(LIKE_KEY);
    searchParams.delete(LABEL_KEY);
    searchParams.delete(MILESTONE_KEY);

    searchParams.set(OPEN_STATUS_KEY, OPEN);
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

        case OPEN_STATUS_KEY:
          if (value === OPEN)
            filter.isOpen = true as IssueFilterOptions['isOpen'];
          if (value === CLOSE)
            filter.isOpen = false as IssueFilterOptions['isOpen'];
          break;

        case LABEL_KEY:
          filter.labelTitle = value as IssueFilterOptions['labelTitle'];
          break;

        case MILESTONE_KEY:
          filter.milestoneTitle = value as IssueFilterOptions['milestoneTitle'];
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
    const { isOpen, labelTitle, likes, milestoneTitle } =
      parseSearchQuery(searchQuery);
    searchParams.delete(OPEN_STATUS_KEY);
    searchParams.delete(LIKE_KEY);
    searchParams.delete(LABEL_KEY);
    searchParams.delete(MILESTONE_KEY);

    if (isOpen !== undefined)
      searchParams.set(OPEN_STATUS_KEY, isOpen ? OPEN : CLOSE);
    if (labelTitle) searchParams.set(LABEL_KEY, labelTitle);
    if (milestoneTitle) searchParams.set(MILESTONE_KEY, milestoneTitle);
    if (likes?.length) {
      searchParams.delete(LIKE_KEY);
      likes.forEach((value) => searchParams.append(LIKE_KEY, value));
    }

    setSearchParams(searchParams);
  };

  const getFilterOptions = () => {
    const filterOptions: IssueFilterOptions = {};

    if (isCloseStatus) filterOptions.isOpen = false;
    if (isOpenStatus) filterOptions.isOpen = true;

    const labelSearchParam = searchParams.get(LABEL_KEY);
    if (labelSearchParam) filterOptions.labelTitle = labelSearchParam;

    const milestoneSearchParam = searchParams.get(MILESTONE_KEY);
    if (milestoneSearchParam)
      filterOptions.milestoneTitle = milestoneSearchParam;

    const likeSearchParmas = searchParams.getAll(LIKE_KEY);
    if (likeSearchParmas) filterOptions.likes = likeSearchParmas;

    return filterOptions;
  };
  const convertParamsToQuery = () => {
    let query = '';
    if (isCloseStatus) query += `${OPEN_STATUS_KEY}:${CLOSE} `;
    if (isOpenStatus) query += `${OPEN_STATUS_KEY}:${OPEN} `;

    let labelSearchParam = getLabelSearchParam();
    if (labelSearchParam) query += `${LABEL_KEY}:${labelSearchParam} `;

    let milestoneSearchParam = getMilestoneSearchParam();
    if (milestoneSearchParam)
      query += `${MILESTONE_KEY}:${milestoneSearchParam} `;

    const likeSearchParmas = getLikeSearchParams();
    if (likeSearchParmas) query += likeSearchParmas.join(' ');

    return query;
  };

  const isOpenStatus = searchParams.get(OPEN_STATUS_KEY) === OPEN;
  const isCloseStatus = searchParams.get(OPEN_STATUS_KEY) === CLOSE;
  const isUnLabeld = searchParams.get(LABEL_KEY) === 'none';
  const isNotWithMilestone = searchParams.get(MILESTONE_KEY) === 'none';

  const hasLabelSearchParam = searchParams.has(LABEL_KEY);
  const hasMilestoneSearchParam = searchParams.has(MILESTONE_KEY);
  const hasLikeSearchParam = searchParams.has(LIKE_KEY);

  return {
    getOpenStatusSearchParam,
    getLabelSearchParam,
    getMilestoneSearchParam,
    getLikeSearchParams,

    setOpenStatusSearchParam,
    toggleLabelSearchParam,
    toggleMilestoneSearchParam,
    setLikeSearchParams,
    initSearchParams,

    isOpenStatus,
    isCloseStatus,
    isUnLabeld,
    isNotWithMilestone,
    hasLabelSearchParam,
    hasMilestoneSearchParam,
    hasLikeSearchParam,

    applySearchQuery,
    getFilterOptions,
    convertParamsToQuery,
  };
}
