const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    name: { type: String },
    Email: { type: String, required: true }, // ✅ Bas unique: true rakho
    message: { type: String }
});

const User = mongoose.model("User", Userschema);
module.exports = User;

