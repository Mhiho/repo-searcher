import React, { useState, useMemo } from "react";
import "../../style/factorial.scss";
import { factorialAlg } from './factorialAlgoritm';

function Factorial() {
  const [number, setNumber] = useState(0);
  const [res, setRes] = useState(null);
  const result = useMemo(() => {
    return factorialAlg(number);
  }, [number]);
  const submitHandler = (e) => {
    e.preventDefault();
    setRes(result);
  };
  return (
    <>
      <div className="factorial-container">
        <form onSubmit={submitHandler}>
          <div className="factorial-input">
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              max="100"
            />
            <input type="submit" value="Sprawdź wynik" />
          </div>
        </form>
      </div>
      <div>Wynik: {res}</div>
    </>
  );
}
export default Factorial;
