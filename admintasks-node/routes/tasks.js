const express = require('express');
const router = express.Router();
const tasks = require('../controllers/tasks');
const auth = require('../middlewares/auth');
const { check } = require('express-validator');

// Create tasks. api/tasks
router.post('/',
  [
    check('name', 'La tarea debe tener un nombre').not().isEmpty()
  ],
  auth,
  tasks.createTask
);

// Get tasks by project
router.get('/',
  auth,
  tasks.getTasks
);

// Update task by id
router.put('/:id',
  auth,
  [
    check('name', 'La tarea debe tener un nombre').not().isEmpty()
  ],
  tasks.updateTask
);

router.delete('/:id',
  auth,
  tasks.deleteTask
);

module.exports = router;