import React, { useState } from "react";
import { getRepos } from "../../actions/getRepos";
import { useDispatch } from "react-redux";
import "../../style/searchbar.scss";
import errorHandler from "../../hoc/errorHandler";

const SearchBar = () => {
  const [login, setLogin] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  const submitHandler = (e) => {
    e.preventDefault();
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
    <div>
      <div className="searchbar-container">
        <form onSubmit={submitHandler}>
          <div className="searchbar-input">
            <input
              placeholder="Search by user"
              type="search"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input type="submit" value="Search Repos" />
          </div>
        </form>
      </div>
      <div className="error-handler-container">
        <h4 className="error-handler-error">{error}</h4>
      </div>
    </div>
  );
};

export default errorHandler(SearchBar);
