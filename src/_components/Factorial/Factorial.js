import React, { useState, useMemo } from "react";
import "../../style/main.scss";
import { factorialAlg } from "./factorialAlgoritm";

function Factorial() {
  const [number, setNumber] = useState(0);
  const [res, setRes] = useState(null);
  const [history, setHistory] = useState([]);

  const result = useMemo(() => {
    return factorialAlg(number);
  }, [number]);
  const submitHandler = (e) => {
    e.preventDefault();
    setRes(result);
    setHistory(history => [...history, `silnia z ${number} wyniosła ${result}`])
  };
  return (
    <>
      <section className="factorial-container">
        <div className="row">
          <form onSubmit={submitHandler}>
            <div className="factorial-input">
              <label>
                Oblicz silnię z podstawionej liczby:
                <input
                  name="factorial"
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  max="10000"
                  min="0"
                />
              </label>
              <input type="submit" value="Sprawdź wynik" />
            </div>
          </form>
        </div>
      </section>
      <article>
        <div className="row">
          <div className="col">
            <h4 className="factorial-result">{res && `Wynik: ${res}`}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5 className="factorial-result-history">historia wyników:</h5>
            <ul>
              {
                history.map((li,index)=> <li key={`history-result-${index}`}>{li}</li>)
              }
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
export default Factorial;
