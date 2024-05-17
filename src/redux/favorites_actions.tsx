import { data } from "../Models/gif.models";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const MATCH_FAVORITE = "MATCH_FAVORITE";

export const addFavorite = (Object: data) => (dispatch: Function) => {
  const { data } = Object;

  return dispatch({ type: ADD_FAVORITE, payload: data });
};

export const matchFavorite = () => (dispatch: Function) => {
  return dispatch({ type: MATCH_FAVORITE });
};
