import userReducers from "./userReducers";
import productReducers from './productReducers';
import applicationPropertiesReducers from './applicationPropertiesReducers';

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    user: userReducers,
    products: productReducers,
    appProperties: applicationPropertiesReducers,
});

export default rootReducers;