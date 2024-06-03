const mongoose = require("mongoose");
const config = require("../../config");
const db = mongoose.createConnection(config.MONGO.URI);



db.on("connected", () => {
    console.log("MongoDB connected successfully");
});

db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

db.on("disconnected", () => {
    console.log("Database connection lost, attempting to reconnect...");
});

module.exports = db;
