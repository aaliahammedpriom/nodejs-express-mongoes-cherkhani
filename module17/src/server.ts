import mongoose from "mongoose";
import app from "./app";
import { Server } from "http";

const port = 5000;
let server: Server;

const main = async () => {
    try {
        await mongoose.connect('mongodb+srv://aaliahammedpriom66:DoHMf4cPHMuvnfIb@cluster0.n3c8xav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Connected to MongoDB");

        server = app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });

        // Optional: graceful shutdown
        process.on('SIGINT', () => {
            server.close(() => {
                console.log('Server closed');
                process.exit(0);
            });
        });

    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

main();
