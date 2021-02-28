import React from "react";
import { useSelector } from "react-redux";
import "../../style/main.scss";

function ReposList() {
  const { payload } = useSelector((state) => state);

  return (
    <section>
      <div className="row repos-title-container">
        <h3 className="repos-list-title">
          {payload &&
          payload.data &&
          payload.data.repos &&
          payload.data.repos.length > 0
            ? `Repozytoria użytkownika: ${
                payload.data.repos[0].full_name.split("/")[0]
              }`
            : null}
        </h3>
      </div>
      <div>
        <ul className="repos-list-ul">
          {payload &&
          payload.data &&
          payload.data.repos &&
          payload.data.repos.length === 0 ? (
            <div className="error-handler-info">
              <h3>Użytkownik istnieje, ale nie ma żadnych repozytoriów</h3>
            </div>
          ) : (
            payload &&
            payload.data &&
            payload.data.repos &&
            payload.data.repos.map((repo, index) => {
              return (
                <>
                  <li className="repos-list-li" key={`repos-list-${index}`}>
                    {repo.name}
                  </li>
                  <li>
                    <ul className="repos-list-sub-ul">
                      {payload &&
                        payload.data &&
                        payload.data.commits &&
                        payload.data.commits.map((commit) => {
                          return commit.map((c, i) => {
                            let arr = c.comments_url.split("/");
                            return arr[5] === repo.name ? (
                              <li
                                className="repos-list-commit-li"
                                key={`commit-${i}`}
                              >
                                {c.commit.message}
                              </li>
                            ) : null;
                          });
                        })}
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
