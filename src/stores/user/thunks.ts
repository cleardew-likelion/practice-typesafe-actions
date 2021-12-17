import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { fetchUserList } from "./actions";
import { requestUserList } from "./api";
import { IUserAction } from "./types";

export function fetchUserListThunk(
  page: number
): ThunkAction<void, RootState, null, IUserAction> {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = fetchUserList;
    dispatch(request(undefined)); // 왜 undefined 넣으면 괜찮아지는지 모르겠음
    try {
      const result = await requestUserList(page);
      dispatch(success(result));
    } catch (e) {
      // dispatch(failure(e));
    }
  };
}
