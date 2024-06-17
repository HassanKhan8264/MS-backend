export const environment = {
  appName: "mystudysolution-spa",
  production: true,
  server: {
    self: {
      HOST: "/api/v1", // Corrected backend URL
      getUrl() {
        return `${this.HOST}`;
      },
    },
  },
};
