import React from "react";
import { CreateBalance } from "../CreateBalance/CreateBalance";
import { useBalance } from "../../hooks/useBalance";
import { BalanceInput } from "../BalanceInput/BalanceInput";
import { BalanceRows } from "./styled";
import { useLocalStore } from "../../hooks/useLocalStore";

function App() {
  const [initialBalance, setVal] = useLocalStore("balance");
  const { addBalance, changeBalance, balance } = useBalance(initialBalance);

  function handleChange(id: number, val: number) {
    changeBalance(id, val);
    setVal(balance);
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
