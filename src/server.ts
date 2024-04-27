
import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./db/dbConfig";


const PORT = process.env.PORT ?? 3000;


const app = express();
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server running on port 3000");
          });
    })
    .catch((error) => console.log(error))



