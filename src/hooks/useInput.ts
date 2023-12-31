import React, { useState } from 'react';

const useInput = (
  initialState: string,
  prevConditionCallback: (e: React.ChangeEvent<HTMLInputElement>) => boolean
) => {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!prevConditionCallback(e)) {
      setError(() => true);
      return;
    }

    setValue(e.target.value);
  };

  return {
    value,
    onChange,
    error,
    setValue,
  };
};

export default useInput;
