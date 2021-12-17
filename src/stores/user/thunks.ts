import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { createUser, fetchUserList } from "./actions";
import { requestCreateUser, requestUserList } from "./api";
import { IUserAction, IUserCreate } from "./types";

export function fetchUserListThunk(
  page: number
): ThunkAction<void, RootState, null, IUserAction> {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = fetchUserList;
    dispatch(request(undefined)); // 왜 undefined 넣으면 괜찮아지는지 모르겠음
    try {
      const result = await requestUserList(page);
      dispatch(success(result));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
}

export function createUserThunk(
  data: IUserCreate
): ThunkAction<void, RootState, null, IUserAction> {
  return async (dispatch) => {
    const { request, success, failure } = createUser;
    dispatch(request(undefined));
    try {
      const payload = await requestCreateUser(data);
      payload && dispatch(success(payload));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
}
