interface AppConfig {
  api: {
    url: string;
    websocketUrl: string;
  };
}

export const appConfig: AppConfig = {
  api: {
    url: "http://localhost:8080/api",
    websocketUrl: "ws://localhost:8081",
  },
};
