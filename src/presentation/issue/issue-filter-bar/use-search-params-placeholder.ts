import { useState, useEffect } from 'react';
import useSearchParamsHandlers from '../use-search-params-handlers';

function useSearchParamsPlaceholder() {
  const [placeholder, setPlaceholder] = useState('');
  const {
    isCloseStatus,
    isOpenStatus,
    getLabelSearchParam,
    getMilestoneSearchParam,
    getLikeSearchParams,
  } = useSearchParamsHandlers();

  useEffect(() => {
    let newPlaceholder = '';

    if (isCloseStatus) newPlaceholder += `isOpen:close `;
    if (isOpenStatus) newPlaceholder += `isOpen:open `;

    const labelSearchParam = getLabelSearchParam();
    if (labelSearchParam) newPlaceholder += `label:${labelSearchParam} `;

    const milestoneSearchParam = getMilestoneSearchParam();
    if (milestoneSearchParam)
      newPlaceholder += `milestone:${milestoneSearchParam} `;

    const likeSearchParmas = getLikeSearchParams();
    if (likeSearchParmas) newPlaceholder += likeSearchParmas.join(' ');

    setPlaceholder(newPlaceholder);
  }, [
    isOpenStatus,
    isCloseStatus,
    getLabelSearchParam,
    getMilestoneSearchParam,
    getLikeSearchParams,
  ]);

  return placeholder;
}

export default useSearchParamsPlaceholder;
