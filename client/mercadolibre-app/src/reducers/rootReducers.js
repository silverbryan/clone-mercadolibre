import userReducers from "./userReducers";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    user: userReducers,
});

export default rootReducers;