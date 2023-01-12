interface AppConfig {
  api: {
    url: string;
    websocketUrl: string;
  };
}

export const appConfig: AppConfig = {
  api: {
    url:
      process.env.NODE_ENV === "production"
        ? "http://54.237.12.36:8080/api"
        : "http://localhost:8080/api",
    websocketUrl:
      process.env.NODE_ENV === "production"
        ? "ws://54.237.12.36:8081"
        : "ws://localhost:8081",
  },
};
