import mongoose from "mongoose";
import config from "../config/index.js";

const IndexerDatabase = _ => {
    mongoose.connect(config.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: "IndexerAppDb",
        user: "IndexerApp",
        pass: "password",
    })
        .then(_ => {
            console.log('Database Connected');
        })
        .catch(console.error);
}

export default IndexerDatabase;