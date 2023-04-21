import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { config } from "dotenv";

const app = express();

//app middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();


//Application port
const port = process.env.PORT || 8080;

//routes
app.get('/', (req, res) => {
    try{
        res.json("Get request")
    } catch(error){
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Server running at port : ${port}`);
})