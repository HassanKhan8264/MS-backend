const dotenv = require('dotenv');

let envFile = '.env.local';
if (process.env.NODE_ENV === 'production') {
    envFile = '.env.production';
}

dotenv.config({ path: envFile });

if (!process.env.MONGODB) {
    throw new Error("Missing MONGODB environment variable");
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
