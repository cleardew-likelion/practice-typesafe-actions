import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { IUserList, IUserCreate } from "./types";

export const fetchUserList = createAsyncAction(
  "user/FETCH_USER_LIST",
  "user/FETCH_USER_LIST_SUCCESS",
  "user/FETCH_USER_LIST_FAIL"
)<unknown, IUserList, AxiosError>();

export const createUser = createAsyncAction(
  "user/CREATE_USER",
  "user/CREATE_USER_SUCCESS",
  "user/CREATE_USER_FAIL"
)<unknown, IUserCreate, AxiosError>();
