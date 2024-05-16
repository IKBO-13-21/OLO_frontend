import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import { message } from "antd";

export default class Store {
  isAuthenticated: boolean = false;
  isConfirmAuthenticated: boolean = true;
  userId: number = -1;
  constructor() {
    makeAutoObservable(this);
  }

  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }

  setIsConfirmAuthenticated(value: boolean) {
    this.isConfirmAuthenticated = value;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password, 1);
      localStorage.setItem("token", response.data.token);
      this.setIsAuthenticated(true);
      this.setIsConfirmAuthenticated(true);
    } catch (e) {
      console.error(e);
      this.setIsConfirmAuthenticated(false);
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.register(email, password);
      this.userId = response.data.userId;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async logout() {
    localStorage.removeItem("token");
    this.setIsAuthenticated(false);
    this.userId = -1;
  }
}
