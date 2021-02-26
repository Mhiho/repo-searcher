import { FETCH_REPOS } from "../actions/getRepos";

export const fetchRepos = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};
