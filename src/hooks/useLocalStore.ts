import { useEffect, useState, useReducer } from "react";

export function useLocalStore(key: string) {
  const initialVal = JSON.parse(localStorage.getItem(key) || "{}");
  const [val, setVal] = useState(initialVal);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val, key]);

  return [val, setVal];
}

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
