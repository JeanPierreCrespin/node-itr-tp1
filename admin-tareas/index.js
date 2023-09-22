const express = require('express');
const taskRoutes = require('./routes/taskRoutes')
const app = express();


app.use(express.json());

//Routes
app.get('/', (request, response) =>{
    response.status(200).json({'statu': 200, 'message': 'El servidor se esta ejecutando'});
});

app.use(taskRoutes);

app.listen(4000, ()=>{
    console.log('El servidor se esta ejecutando');
});