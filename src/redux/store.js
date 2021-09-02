import { createStore } from "redux";
import favorites from "./reducers/favorites";

const store = createStore(favorites, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store; 