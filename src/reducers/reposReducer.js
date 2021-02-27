import { FETCH_FAILURE, FETCH_REPOS } from "../actions/getRepos";

export const fetchRepos = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REPOS:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        data: null
      }
    default:
      return state;
  }
};
