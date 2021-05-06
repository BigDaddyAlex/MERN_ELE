const express = require('express');
const router = express.Router();

const Task = require('../../models/Task');

router.get('/',(req, res) => {
    Task.find()
    .then(tasks=>res.json(tasks))
});

router.post('/',(req, res)=>{
    const newTask = new Task(
        {firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
        }
    );

    newTask.save().
    then(task=>res.json(task))
    .catch(err => { console.log(err) });

});

module.exports= router;