import axios from "axios";

import { IUserList } from "./types";

const BASE_URL = "https://reqres.in";

export const requestUserList = async (page: number) => {
  const resp = await axios.get<IUserList>(`${BASE_URL}/api/users?page=${page}`);

  return resp.data;
};
