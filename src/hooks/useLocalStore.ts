import { useEffect, useReducer } from "react";

export function createLocalStoreHook(key: string, initialVal?: string) {
  const listeners: (() => void)[] = [];

  function getState() {
    return localStorage.getItem(key) || initialVal;
  }

  function dispatch(value: string) {
    localStorage.setItem(key, value);
    listeners.forEach(listener => listener());
  }

  return function useLocalStore(): [
    ReturnType<typeof getState>,
    (value: string) => void
  ] {
    const [, forceUpdate] = useReducer(i => i + 1, 0);

    useEffect(() => {
      listeners.push(() => {
        forceUpdate();
      });
    }, []);

    return [getState(), dispatch];
  };
}
