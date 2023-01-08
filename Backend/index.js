import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/user.route.js'
import bodyParser from 'body-parser'

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



mongoose.connect('mongodb://127.0.0.1:27017/loginRegisterDB')
    .then(() => {
        console.log('connected');

    })
    .catch(err => {
        console.log(err)
    })



app.listen(4000, () => {
    console.log("running on port 4000")
})

app.use("/",userRoutes)