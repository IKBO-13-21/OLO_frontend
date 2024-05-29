import { AxiosResponse } from "axios";
import {
  addArticleForUserResponse,
  deleteArticleForUserResponse,
  GetAllArticlesResponse,
} from "../models/response/AuthResponse";
import $api from "../http";

export default class StatesService {
  static async getArticles(): Promise<AxiosResponse<GetAllArticlesResponse>> {
    return $api.get<GetAllArticlesResponse>("/api/olo/articles");
  }

  static async getUserArticles(): Promise<
    AxiosResponse<GetAllArticlesResponse>
  > {
    return $api.get<GetAllArticlesResponse>("/api/olo/getUserArticles");
  }

  static async addArticleForUser(
    articleId: number,
  ): Promise<AxiosResponse<addArticleForUserResponse>> {
    return $api.post<addArticleForUserResponse>("/api/olo/addArticleForUser", {
      articleId,
    });
  }

  static async deleteArticleForUser(
    articleId: number,
  ): Promise<AxiosResponse<deleteArticleForUserResponse>> {
    return $api.post<deleteArticleForUserResponse>(
      "/api/olo/deleteArticleForUser",
      {
        articleId,
      },
    );
  }
}
