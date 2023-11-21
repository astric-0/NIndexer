import express from "express";
import { clientRouter } from "./app/routes/index.js";
import { errorHandler } from "./lib/error-handler/index.js";
import cors from "cors";

import IndexerDatabase from "./lib/IndexerDatabase.js";

IndexerDatabase();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/image", express.static("./app/images"));

app.use("/client", clientRouter);
//app.use('/', (_, res) => res.send('Indexer IsActive'));
app.use(errorHandler);

app.listen(port, (error) => {
    if (error) console.error(error);
    else console.log(`Started @ ${port} @ ${new Date().toLocaleTimeString()}`);
});

export default app;
