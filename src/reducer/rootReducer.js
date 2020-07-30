import { combineReducers } from "redux";

import khoaHocReducer from "./khoaHocReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  khoaHocReducer,
  authReducer,
});
