import { ADD_FAVORITE } from "./favorites_actions";
import { Id } from "../Models/gif.models";

const initialState = {
  Favorites: [] as any,
};

const favoriteReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      let totalFavorites = [...state.Favorites];

      for (let i = 0; i < state.Favorites.length; i++) {
        if (state.Favorites[i].includes(action.payload.id)) {
          totalFavorites = totalFavorites.filter(
            (unFavorito) => unFavorito !== action.payload
          );
        } else {
          totalFavorites.push(action.payload);
        }
      }

      if (state.Favorites.length === 1) localStorage.removeItem("favorites");

      return {
        ...state,
        Favorites: totalFavorites,
      };
    }
  }
};

export default favoriteReducer;
