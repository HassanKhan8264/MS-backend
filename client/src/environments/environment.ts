// src/environments/environment.ts
export const environment = {
  appName: "mystudysolution-spa",
  production: false,
  server: {
    self: {
      HOST: "http://localhost:5001", // Corrected backend URL
      getUrl() {
        return `${this.HOST}`;
      },
    },
  },
};
