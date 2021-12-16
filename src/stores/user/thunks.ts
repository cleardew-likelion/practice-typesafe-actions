import { Dispatch } from "redux";
import { fetchUserList } from "./actions";
import { requestUserList } from "./api";

export function fetchUserListThunk() {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = fetchUserList;
    dispatch(request(undefined)); // 왜 undefined 넣으면 괜찮아지는지 모르겠음
    try {
      const result = await requestUserList();
      dispatch(success(result));
    } catch (e) {
      // dispatch(failure(e));
    }
  };
}
