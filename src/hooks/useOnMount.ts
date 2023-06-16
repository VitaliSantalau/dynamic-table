import { useEffect } from 'react';
import { isFunction } from 'lodash';


export const useOnMount = (func: () => void) => {
  useEffect(
    () => {
      isFunction(func) && func();
    },
    []
  );
};
