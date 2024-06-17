export const environment = {
  appName: "mystudysolution-spa",
  production: true,
  server: {
    self: {
      HOST: "https://mystydysolution-spa.vercel.app", // Corrected backend URL
      getUrl() {
        return `${this.HOST}`;
      },
    },
  },
};
