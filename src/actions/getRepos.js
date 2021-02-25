import axios from "../axiosInstance";
export const FETCH_REPOS = "FETCH_REPOS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getRepos = (login) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/users/${login}/repos?sort=updated&per_page=5`
      );
      dispatch({
        type: FETCH_REPOS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_FAILURE,
        payload: err,
      });
    }
  };
};
