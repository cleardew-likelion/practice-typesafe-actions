import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user/reducer";
import { IUserList } from "./user/types";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;

export interface RootState {
  user: { userList: IUserList };
}

export const store = createStore(rootReducer, applyMiddleware(thunk));
