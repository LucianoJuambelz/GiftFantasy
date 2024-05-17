import{ applyMiddleware, createStore, combineReducers } from "redux";
import{composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import gifReducer from './reducer';
import favoriteReducer from "./favoriteReducer";


const store = createStore(
    gifReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const rootReducer = combineReducers({
    gifs: gifReducer,
});
  
export type RootState = ReturnType<typeof rootReducer>

export default store;