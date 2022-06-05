const mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/near")
    //return mongoose.connect("mongodb+srv://admin:admin@cluster0.jvwh1zk.mongodb.net/nearby?retryWrites=true&w=majority");
};

module.exports = connect;

