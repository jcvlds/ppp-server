var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var database = require('./models/db');

// var taskController = require('./app/task/taskController');


// Defining variables
var SERVER_PORT = process.env.PORT || 5000;

var app = express();


// applying middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    // res.send("Welcome to the home page baby");
    database.connection.query('SELECT * FROM ppp_user_info', (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);
    })
})

app.post('/save', (req, res) => {
    const clientData = req.body;
    try {
        database.connection.query("INSERT INTO ppp_user_info SET ?", clientData, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("created customer: ", { ...clientData });
        });
        res.send("Success")
    } catch (error) {
        res.send("Failure")
    }
})

app.listen(SERVER_PORT,function(){
    console.log("Server is listening at port :  ",SERVER_PORT);
});


// create Task
// app.post('/api/v1.0/task',taskController.createTask);

// Get all task resource
// app.get('/api/v1.0/task',taskController.getTask);

// Get task by id
// app.get('/api/v1.0/task/id/:taskId',taskController.getTaskById);

// Delete task by id
// app.delete('/api/v1.0/task/id/:taskId',taskController.deleteTaskById);

// Update task status by id
// app.put('/api/v1.0/task/id/:taskId',taskController.updateTaskById);



// this wrapper is only for testing purpose
// if(!module.parent){
    // staring the express server
// }

module.exports = app;
