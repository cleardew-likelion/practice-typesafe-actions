import axios from "axios";

import { IUserList } from "./types";

const BASE_URL = "https://reqres.in";

export const requestUserList = async () => {
  const resp = await axios.get<IUserList>(`${BASE_URL}/api/users?page=2`);

  return resp.data;
};
