import { createLocalStoreHook } from "./useLocalStore";

export type SingleBalance = {
  id: number;
  value: number;
};

export type Balance = {
  [key: number]: SingleBalance;
};

const LOCAL_STORE_KEY = "balance";
const useLocalStore = createLocalStoreHook(LOCAL_STORE_KEY);

export function useBalance(initialBalance: Balance) {
  const [storeValue, setStoreValue] = useLocalStore();
  let balance = initialBalance;

  if (storeValue) {
    balance = JSON.parse(storeValue);
  }
  // const [balance, setBalance] = useState<Balance>(initialBalance);

  function addBalance() {
    const id = Object.keys(balance).length;
    const newBalance = {
      ...balance,
      [id]: { id, value: 0 }
    };

    setStoreValue(JSON.stringify(newBalance));
  }

  function changeBalance(id: number, value: number) {
    const newBalance = {
      ...balance,
      [id]: { ...balance[id], value }
    };

    setStoreValue(JSON.stringify(newBalance));
  }

  return {
    balance,
    addBalance,
    changeBalance
  };
}
