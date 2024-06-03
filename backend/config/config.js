const dotenv = require("dotenv");
const config = dotenv.config();




if (config.error) {
    throw new Error("Invalid Config");
}

const all = {

    PORT: process.env.ENV || process.env.LOCALPORT,

    MONGO: {
        URI: process.env.MONGODB_URI,
    },
    EMAIL: {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS,
        EMAIL_ADMIN: process.env.EMAIL_ADMIN,
    },
};


module.exports = all;
