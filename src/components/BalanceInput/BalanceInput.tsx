import React from "react";
import { SingleBalance } from "../../hooks/useBalance";

type Props = {
  balance: SingleBalance;
  onChange: (id: number, value: number) => void;
};

export function BalanceInput({ onChange, balance }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(balance.id, Number(e.target.value));
  }

  return <input onChange={handleChange} type="number" />;
}
