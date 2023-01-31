require('dotenv').config();
const express = require('express');
const sequelize = require('./db')
const models = require('./models/index.js')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.status(200).json({message: 'WORKING!!'})
})


const start = async () =>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () =>console.log(`server started on ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

start()