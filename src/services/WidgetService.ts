import { AxiosResponse } from "axios";
import {
  addUserWidgetResponse,
  deleteUserWidgetResponse,
  GetUserWidgetResponse,
  updateUserWidgetResponse,
} from "../models/response/AuthResponse";
import $api from "../http";

export default class WidgetService {
  static async getUserWidget(): Promise<AxiosResponse<GetUserWidgetResponse>> {
    return $api.get<GetUserWidgetResponse>("/api/olo/getWidgets");
  }

  static async addUserWidget(
    data: string,
  ): Promise<AxiosResponse<addUserWidgetResponse>> {
    return $api.post<addUserWidgetResponse>("/api/olo/addWidget", {
      data,
    });
  }

  static async updateUserWidget(
    id: number,
    data: string,
  ): Promise<AxiosResponse<updateUserWidgetResponse>> {
    return $api.post<updateUserWidgetResponse>("/api/olo/updateWidget", {
      id,
      data,
    });
  }

  static async deleteUserWidget(
    widgetId: number,
  ): Promise<AxiosResponse<deleteUserWidgetResponse>> {
    return $api.post<deleteUserWidgetResponse>("/api/olo/deleteWidget", {
      widgetId,
    });
  }
}
