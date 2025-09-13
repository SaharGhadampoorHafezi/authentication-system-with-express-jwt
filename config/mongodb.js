import mongoose from 'mongoose';

export default function connectDB() {
    const url = 'mongodb://127.0.0.1/users';

    try {
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }

    const dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
        console.log(`database connected: ${url}`);
    })

    dbConnection.on("error", (error) => {
        console.error(`connection error: ${error}`)
    })

    return;
}