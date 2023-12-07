import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function useSearchParamsPlaceholder() {
  const [searchParams] = useSearchParams();
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    let newPlaceholder = '';

    if (searchParams.get('isOpen') === 'close') {
      newPlaceholder += `isOpen:close `;
    } else {
      newPlaceholder += `isOpen:open `;
    }

    if (searchParams.get('label')) {
      newPlaceholder += `label:${searchParams.get('label')} `;
    }

    if (searchParams.get('milestone')) {
      newPlaceholder += `milestone:${searchParams.get('milestone')} `;
    }

    setPlaceholder(newPlaceholder);
  }, [searchParams]);

  return placeholder;
}

export default useSearchParamsPlaceholder;
