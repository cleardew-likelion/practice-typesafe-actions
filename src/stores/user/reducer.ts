import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { createUser, fetchUserList } from "./actions";
import { IUserAction, IUserList } from "./types";

export const userList = createReducer({}).handleAction(
  fetchUserList.success,
  (state: IUserList, action: IUserAction) => action.payload
);

export const createUserResponse = createReducer({})
  .handleAction(createUser.success, () => {
    alert("create user successed!");
  })
  .handleAction(createUser.failure, () => {
    alert("create user failed!");
  });

const userReducer = combineReducers({
  userList,
  createUserResponse,
});

export default userReducer;

export type IUserState = ReturnType<typeof userReducer>;
