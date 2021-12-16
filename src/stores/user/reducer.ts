import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchUserList } from "./actions";
import { IUserAction, IUserList } from "./types";

export const userList = createReducer({}).handleAction(
  fetchUserList.success,
  (state: IUserList, action: IUserAction) => action.payload
);

const userReducer = combineReducers({
  userList,
});

export default userReducer;

export type IUserState = ReturnType<typeof userReducer>;
