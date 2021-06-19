const express = require('express');
const router = express.Router();
const projects = require('../controllers/projects');
const { check } = require('express-validator');
const auth = require('../middlewares/auth');

// Creates a project. /api/projects
router.post('/',
  [
    check('name', 'El proyecto debe tener un nombre').not().isEmpty()
  ],
  auth,
  projects.createProject
);

router.get('/',
  auth,
  projects.getProjects
);

// Delete by ID
router.delete('/:id',
  auth,
  projects.deleteProject
);

module.exports = router;