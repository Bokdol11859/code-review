import { useState, useEffect } from 'react';
import useSearchParamsHandlers from '../use-search-params-handlers';

function useSearchParamsPlaceholder() {
  const [placeholder, setPlaceholder] = useState('');
  const { convertParamsToQuery } = useSearchParamsHandlers();

  useEffect(() => {
    const newPlaceholder = convertParamsToQuery();
    setPlaceholder(newPlaceholder);
  }, [convertParamsToQuery]);

  return placeholder;
}

export default useSearchParamsPlaceholder;
