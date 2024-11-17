const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // No need for deprecated options
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDB;
