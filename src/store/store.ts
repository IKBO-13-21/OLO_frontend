import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";

export default class Store {
  isAuthenticated: boolean = false;
  userId: number = -1;
  constructor() {
    makeAutoObservable(this);
  }

  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      this.setIsAuthenticated(true);
    } catch (e) {
      console.error(e);
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.register(email, password);
      console.log(response);
      this.userId = response.data.userId;
    } catch (e) {
      console.error(e);
    }
  }

  async logout() {
    localStorage.removeItem("token");
    this.setIsAuthenticated(false);
    this.userId = -1;
  }
}
