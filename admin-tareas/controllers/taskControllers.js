const Task = require("../models/taskModel");

const tasks = [];


module.exports.tasks_get = async (req, res) => {

    res.status(200).json(tasks);
}

module.exports.task_get = async (req, res) => {
    const taskId = req.params.id;
    const task = task.find((task) => task.id == taskId);

    if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.status(200).json(task);
}

module.exports.task_post = async (req, res) => {

    const newTask = new Task(
        Date.now().toString(), // Generar un ID único
        req.body.name,
        req.body.description,
        new Date(),
        req.body.completed
    );

    tasks.push(newTask);
    res.status(201).json(newTask);
}

module.exports.task_put = async (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    const index = tasks.findIndex(task => task.id === taskId);

    if (index === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    tasks[index] = updatedTask;
    res.json(updatedTask);
    //res.send('actualizar una tarea');
}
module.exports.task_delete = async (req, res) => {
    const taskId = req.params.id;
    const index = tasks.findIndex(task => task.id === taskId);

    if (index === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    tasks.splice(index, 1);
    res.sendStatus(204);
}