const mongoose = require("mongoose");
const db = require("../db/db");
const { Schema } = mongoose;
const { Types } = Schema;




const userInfoSchema = new Schema({
    ip: {
        type: Types.String
    },

    name: {
        type: Types.String

    },

    email: {
        type: Types.String,
    },

    phone: {
        type: Types.Number,
    },

    message: {
        type: Types.String,
        Required: false,
    },

    selectedExamControl: {
        type: Types.String,
        Required: false,
    },
});

const model = db.model("userInfo", userInfoSchema);

module.exports = model;
