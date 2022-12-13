import express from "express"
import mongoose from 'mongoose'
const PORT = 5000;
import router from "./router.js"

const DB_URL = `mongodb+srv://user:user@cluster0.ydmxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use('/api',router);

async function startApp(){
    try{
      await mongoose.connect(DB_URL,);
      app.listen(PORT, () => console.log('Server connected on port' + PORT))
    }
    catch(e){
        console.log(e)
    }
}
startApp()
