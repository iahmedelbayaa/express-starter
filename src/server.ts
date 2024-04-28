
import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./db/dbConfig";
import router from "./router";


const PORT = process.env.PORT ?? 3000;




const app = express();
app.use(express.json());


app.use('/api/v1', router)

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => console.log(error))


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

