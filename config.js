const dotenv = require("dotenv");
const config = dotenv.config({ path: "" });




if (config.error) {
    throw new Error("Invalid Config");
}

const all = {

    PORT: process.env.LOCALPORT || 3000,

    MONGO: {
        URI: process.env.MONGODB,
    },
    EMAIL: {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS,
        EMAIL_ADMIN: process.env.EMAIL_ADMIN,
    },
};


module.exports = all;
