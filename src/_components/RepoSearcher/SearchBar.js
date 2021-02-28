import React, { useState } from "react";
import { getRepos } from "../../actions/getRepos";
import { useDispatch } from "react-redux";
import "../../style/main.scss";
import errorHandler from "../../hoc/errorHandler";

const SearchBar = () => {
  const [login, setLogin] = useState("");
  const [, setLoading] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  const submitHandler = (e) => {
    e.preventDefault();
    if (login === "") {
      return;
    }
    if (login.match(regex)) {
      setError(null);
    } else {
      setError(
        "Nazwa usera nie może zawierać polskich znaków, ani znaków specjalnych oprócz myślnika w środku nazwy"
      );
      return;
    }
    dispatch(getRepos(login));
    setLoading(false);
  };

  return (
    <section>
      <div className="row">
        <form onSubmit={submitHandler}>
          <div className="searchbar-input">
            <label>
              Wyszukaj najświeższe repozytoria dla usera:
              <input
                placeholder="Szukaj według loginu"
                type="search"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </label>
            <input type="submit" value="Szukaj" />
          </div>
        </form>
      </div>
      <div className="row">
        <h4 className="error-handler-error">{error}</h4>
      </div>
    </section>
  );
};

export default errorHandler(SearchBar);
