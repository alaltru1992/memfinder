const express = require('express');
const mongoose = require('mongoose');
const expresshdb = require('express-handlebars');
const todosRoutes = require('./routes/todos');

const app = express();

const port  = process.env.PORT || 3000;
const hbs = expresshdb.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

app.engine('hbs',hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(todosRoutes)

async function start(){
    try{
        mongoose.connect('mongodb+srv://aaa:123@cluster0.3elii5p.mongodb.net/todos',{
            useNewUrlParser: true,
        });
        app.listen(port, () => {
            console.log('started')
        })
    }
    catch(e){
      console.log(e)
    }
}

start();