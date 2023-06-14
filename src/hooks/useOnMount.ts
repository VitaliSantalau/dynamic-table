import { isFunction } from '@tanstack/react-table';
import { useEffect } from 'react';


export const useOnMount = (func: () => void) => {
  useEffect(
    () => {
      isFunction(func) && func();
    },
    []
  );
};
