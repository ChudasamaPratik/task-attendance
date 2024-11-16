const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const conn = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongoose Connect");
    } catch (error) {
        console.log("MongoDB Connection error".error);
        process.exit(1);

    }
}


module.exports = conn;