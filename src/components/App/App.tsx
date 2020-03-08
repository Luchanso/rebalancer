import React from "react";
import { CreateBalance } from "../CreateBalance/CreateBalance";
import { useBalance } from "../../hooks/useBalance";
import { BalanceInput } from "../BalanceInput/BalanceInput";
import { BalanceRows } from "./styled";

function App() {
  const { addBalance, changeBalance, balance } = useBalance();

  function handleChange(id: number, val: number) {
    changeBalance(id, val);
  }

  return (
    <div className="App">
      <CreateBalance onCreate={addBalance} />
      <BalanceRows>
        {Object.values(balance).map(item => (
          <BalanceInput onChange={handleChange} balance={item} />
        ))}
      </BalanceRows>
    </div>
  );
}

export default App;
