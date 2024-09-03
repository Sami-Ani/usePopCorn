import { useEffect, useState } from "react";

export default function CurrencyCalculator() {
  const [amountOne, setAmountOne] = useState("");
  const [amountTwo, setAmountTwo] = useState("");

  const handleAmountOne = (e) => {
    setAmountOne(e.target.value);
  };

  useEffect(function () {
    async function currency() {
      const result = await fetch(
        `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
      );
      console.log(result);
    }
    currency();
  }, []);

  return (
    <>
      <input type="text" value={amountOne}></input>
      <select
        name="currency"
        id="currency"
        value={amountOne}
        onChange={handleAmountOne}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <select name="currency" id="currency">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
    </>
  );
}
