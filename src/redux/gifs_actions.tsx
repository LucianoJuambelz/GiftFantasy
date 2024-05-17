import axios from "axios";

export const GET_GIFS = "GET_GIFS";
export const GET_ONE_GIF = "GET_ONE_GIF";
export const GET_TRENDINGS = "GET_TRENDINGS";
export const GET_RANDOM_GIF = "GET_RANDOM_GIF";
export const CLEAN_GIFS = "CLEAN_GIFS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const CLEAN_RANDOM = "CLEAN_RANDOM";

export const getGifs = (keyword: string) => async (dispatch: Function) => {
  try {
    if (!keyword) {
      keyword = "daily";
    }

    const { data } = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${keyword}&offset=0&rating=g&lang=en`
    );

    dispatch({ type: GET_GIFS, payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const getOneGif = (id: string) => async (dispatch: Function) => {
  try {
    const { data } = await axios.get(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({ type: GET_ONE_GIF, payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const getRandomGif = () => async (dispatch: Function) => {
  try {
    const { data } = await axios.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}`
    );

    dispatch({ type: GET_RANDOM_GIF, payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const getTrendings = () => async (dispatch: Function) => {
  try {
    const { data } = await axios.get(
      `https://api.giphy.com/v1/trending/searches?api_key=${process.env.REACT_APP_API_KEY}&limit=5`
    );

    const values = data.data.slice(0, 5);
    dispatch({ type: GET_TRENDINGS, payload: values });
  } catch (e) {
    console.log(e);
  }
};

export const clean = (component: string) => (dispatch: Function) => {
  if (component === "random") {
    return dispatch({ type: CLEAN_RANDOM });
  }

  if (component === "detail") {
    return dispatch({ type: CLEAN_DETAIL });
  }

  return dispatch({ type: CLEAN_GIFS });
};
