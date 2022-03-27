// Require mongoose
const mongoose = require ('mongoose');
// Create schema
const schema = mongoose.Schema
const userSchema = new schema({
    name: {
        type: String,
        required: True
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: Number
})

module.exports = User = mongoose.model('user', userSchema);
