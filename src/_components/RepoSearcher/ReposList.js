import React from "react";
import { useSelector } from "react-redux";
import "../../style/main.scss";

function ReposList() {
  const { repos } = useSelector((state) => state.repos);

  const commitsMock = [
    '1','2','3','4','5'
  ]

  return (
    <section>
      <div className="row repos-title-container">
        <h3 className='repos-list-title'>{repos && `Repozytoria:`}</h3>
      </div>
      <div>
        <ul className="repos-list-ul">
          {repos && repos.length === 0 ? (
            <div className="error-handler-info">
              <h3>Użytkownik istnieje, ale nie ma żadnych repozytoriów</h3>
            </div>
          ) : (
            repos &&
            repos.map((repo, index) => {
              return (
                <>
                <li className="repos-list-li" key={`repos-list-${index}`}>
                  {repo.name}
                </li>
                <li>
                  <ul className="repos-list-a">
                    {
                      commitsMock.map((commit,index)=>(<li key={`commit-${index}`}>{commit}</li>))
                    }
                  </ul>
                </li>
                </>
              );
            })
          )}
        </ul>
      </div>
    </section>
  );
}
export default ReposList;
