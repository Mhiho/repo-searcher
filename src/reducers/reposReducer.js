import { FETCH_FAILURE, FETCH_REPOS } from "../actions/getRepos";

export const fetchRepos = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        repos: null
      }
    default:
      return state;
  }
};
