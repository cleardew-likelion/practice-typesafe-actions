import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { IUserList } from "./types";

export const fetchUserList = createAsyncAction(
  "user/FETCH_USER_LIST",
  "user/FETCH_USER_LIST_SUCCESS",
  "user/FETCH_USER_LIST_FAIL"
)<unknown, IUserList, AxiosError>();
