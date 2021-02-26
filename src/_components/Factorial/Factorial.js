import React, { useState, useMemo } from "react";
import "../../style/main.scss";
import { factorialAlg } from "./factorialAlgoritm";

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
      </article>
    </>
  );
}
export default Factorial;
