import { AxiosResponse } from "axios";
import { GetUserInfoResponse } from "../models/response/AuthResponse";
import $api from "../http";

export default class UserService {
  static async getUser(): Promise<AxiosResponse<GetUserInfoResponse>> {
    return $api.get<GetUserInfoResponse>("/api/auth/get_user_info");
  }
}
