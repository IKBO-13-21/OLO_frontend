import $api from "../http";
import { AxiosResponse } from "axios";
import {
  AuthResponse,
  AuthResponseRegister,
} from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    email: string,
    password: string,
    app_id: number,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/api/auth/login", { email, password, app_id });
  }

  static async register(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponseRegister>> {
    return $api.post<AuthResponseRegister>("/api/auth/register", {
      email,
      password,
    });
  }
}
