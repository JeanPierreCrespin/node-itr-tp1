const {Router} = require('express');

const tareaController = require('../controllers/taskControllers')

const router = Router();

router.get('/tasks', tareaController.tasks_get)
router.get('/tasks/:id', tareaController.task_get)

router.post('/tasks',tareaController.task_post)

router.put('/tasks/:id',tareaController.task_put)

router.delete('/tasks/:id', tareaController.task_delete)


module.exports = router;