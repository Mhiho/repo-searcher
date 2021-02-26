import React from "react";
import { useSelector } from "react-redux";
import "../../style/main.scss";

function ReposList() {
  const { repos } = useSelector((state) => state.repos);
  const dupa = useSelector((state) => state);
  console.log(dupa);
  return (
    <ul className="repos-list-ul">
      { repos && repos.length === 0 ? (
        <div className="error-handler-info">
          <h3>Użytkownik istnieje, ale nie ma żadnych repozytoriów</h3>
        </div>
      ) : (
        repos && repos.map((repo, index) => {
          return (
            <li className="repos-list-li" key={`repos-list-${index}`}>
              <a className="repos-list-a" href={repo.html_url}>
                {repo.name}
              </a>
            </li>
          );
        })
      )}
    </ul>
  );
}
export default ReposList;
