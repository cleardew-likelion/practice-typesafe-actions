import axios from "axios";

import { IUserCreate, IUserList } from "./types";

const BASE_URL = "https://reqres.in";

export const requestUserList = async (page: number) => {
  const resp = await axios.get<IUserList>(`${BASE_URL}/api/users?page=${page}`);

  return resp.data;
};

export const requestCreateUser = async (data: IUserCreate) => {
  const resp = await axios.post<IUserCreate>(`${BASE_URL}/api/users`, data);

  return resp.data;
};
