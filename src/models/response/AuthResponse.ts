export interface AuthResponse {
  token: string;
}

export interface AuthResponseRegister {
  userId: number;
}

export interface GetUserInfoResponse {
  userId: string;
  email: string;
  role: string;
  dateRegister: string;
}

export interface Widget {
  id: number;
  data: string;
}

export interface Articles {
  id: string;
  header: string;
}

export interface GetUserWidgetResponse {
  widgets: Widget[];
}

export interface GetAllArticlesResponse {
  articles: Articles[];
}

export interface addUserWidgetResponse {
  response: string;
}

export interface updateUserWidgetResponse {
  response: string;
}

export interface deleteUserWidgetResponse {
  response: string;
}

export interface addArticleForUserResponse {
  response: string;
}

export interface deleteArticleForUserResponse {
  response: string;
}
