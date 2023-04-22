import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { config } from "dotenv";
import router from "./router/route.js"

//import connection file
import connect from "./database/conn.js";

const app = express();

//app middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();


//Application port
const port = process.env.PORT || 8080;

connect();

//routes
app.use('/api', router)                 //APIs

app.get('/', (req, res) => {
    try{
        res.json("Get request")
    } catch(error){
        console.log(error);
    }
})

// start server only when we have valid connection
connect()
    .then(() => {
        try{
            app.listen(port, () => {
                console.log(`Server running at port : ${port}`);
            })
        } catch(error){
            console.log("Can not connect to the server");
        }
    })
    .catch((err) => {
        console.log("Invalid database connection")
    });