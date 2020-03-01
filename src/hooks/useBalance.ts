import { useState } from "react";

export type SingleBalance = {
  id: number;
  value: number;
};

export type Balance = {
  [key: number]: SingleBalance;
};

export function useBalance(initialBalance: Balance) {
  const [balance, setBalance] = useState<Balance>(initialBalance);

  function addBalance() {
    const id = Object.keys(balance).length;

    setBalance({
      ...balance,
      [id]: { id, value: 0 }
    });
  }

  function changeBalance(id: number, value: number) {
    setBalance({
      ...balance,
      [id]: { ...balance[id], value }
    });
  }

  return {
    balance,
    addBalance,
    changeBalance
  };
}
