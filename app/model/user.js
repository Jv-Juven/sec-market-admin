module.exports = app => {
    const mongoose = app.mongoose;
    const UserSchema = new mongoose.Schema({
        userName: {
            type: String
        },
        password: {
            type: String
        },
        rank: {
            type: Number,
            default: 0
        }
    });

    return mongoose.model('User', UserSchema);
}
