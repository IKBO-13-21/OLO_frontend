import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import { UserInfo } from "../models/response/UserInfo";
import UserService from "../services/UserService";
import WidgetService from "../services/WidgetService";
import { Articles, Widget } from "../models/response/AuthResponse";
import StatesService from "../services/StatesService";

export default class Store {
  isAuthenticated: boolean = false;
  isConfirmAuthenticated: boolean = true;
  user: UserInfo | null = null;
  widgets: Widget[] = [];
  articles: Articles[] = [];
  articlesUser: Articles[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }

  setUser(value: UserInfo) {
    this.user = value;
  }

  setWidgets(value: Widget[]) {
    this.widgets = value;
  }

  setArticles(value: Articles[]) {
    this.articles = value;
  }

  setArticlesUser(value: Articles[]) {
    this.articlesUser = value;
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
      await AuthService.register(email, password);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async logout() {
    this.setIsAuthenticated(false);
    localStorage.removeItem("token");
  }

  async getInfo() {
    try {
      const response = await UserService.getUser();
      this.setUser(response.data);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async getUserWidget() {
    try {
      const response = await WidgetService.getUserWidget();
      this.setWidgets(response.data.widgets);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async addUserWidget(data: string) {
    try {
      await WidgetService.addUserWidget(data);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async updateUserWidget(id: number, data: string) {
    try {
      await WidgetService.updateUserWidget(id, data);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async deleteUserWidget(widgetId: number) {
    try {
      await WidgetService.deleteUserWidget(widgetId);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async getUserArticles() {
    try {
      const response = await StatesService.getUserArticles();
      this.setArticlesUser(response.data.articles);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async getArticles() {
    try {
      const response = await StatesService.getArticles();
      this.setArticles(response.data.articles);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async addUserArticles(articleId: number) {
    try {
      await StatesService.addArticleForUser(articleId);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async deleteUserArticles(articleId: number) {
    try {
      await StatesService.deleteArticleForUser(articleId);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
