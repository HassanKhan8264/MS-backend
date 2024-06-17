export const environment = {
  appName: "mystudysolution-spa",
  production: true,
  server: {
    self: {
      HOST: "", // Corrected backend URL
      getUrl() {
        return `${this.HOST}`;
      },
    },
  },
};
