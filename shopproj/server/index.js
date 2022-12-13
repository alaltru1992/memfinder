require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const sequalize = require('./db');

const app = express();
async function start(){
    try{
      await sequalize.authenticate();
      await sequalize.sync();
      app.listen(PORT, () =>{
          console.log('started')
      })
    }
    catch(e){
        console.log(e)
    }
}

start()