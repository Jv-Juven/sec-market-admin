module.exports = app => {
    const mongoose = app.mongoose;
    const InfoSchema = new mongoose.Schema({
        name: {
            type: String
        },
        department: {
            type: String
        },
        sex: {
            type: String
        },
        idNo: {
            type: String
        }
    });
    return mongoose.model('Info', InfoSchema);
}
