import axios from "../axiosInstance";
export const FETCH_REPOS = "FETCH_REPOS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getRepos = (login) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/users/${login}/repos?sort=updated&per_page=5`
      );
      const reposNames = await response.data.map((repo) => repo.name);
      const commits = [];
      for (let i = 0; i < reposNames.length; i++) {
        let responseCommits = await axios.get(
          `/repos/${login}/${reposNames[i]}/commits?sort=updated&per_page=5`
        );
        commits.push(responseCommits.data);
      }
      const payload = {
        repos: response.data,
        commits: commits,
      };
      console.log(payload);
      dispatch({
        type: FETCH_REPOS,
        payload: payload,
      });
    } catch (err) {
      dispatch({
        type: FETCH_FAILURE,
      });
    }
  };
};
