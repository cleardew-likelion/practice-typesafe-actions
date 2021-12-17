import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type IUserAction = ActionType<typeof actions>;

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUserList {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: {
    url: string;
    text: string;
  };
}

export interface IUserCreate {
  name: string;
  email: string;
}
