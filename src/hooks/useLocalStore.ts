import { useEffect, useState } from "react";

export function useLocalStore(key: string) {
  const initialVal = JSON.parse(localStorage.getItem(key) || "{}");
  const [val, setVal] = useState(initialVal);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val, key]);

  return [val, setVal];
}
