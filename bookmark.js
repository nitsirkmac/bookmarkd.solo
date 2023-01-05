require('dotenv').config();
const mongoose = require('mongoose');

const URL = process.env.DATABASE_URL;

mongoose.connect(URL, {})

const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

const bookmarkSchema = new mongoose.Schema({
    title: {type: String},
    url: {type: String},
})

const Bookmark = mongoose.model('bookmark', bookmarkSchema)

module.exports = Bookmark;