const Task = require('../models/Task');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.createTask = async (req, res) => {

  // Revisar errores
  const errors = validationResult(req);

  if ( !errors.isEmpty() ) {
    return res.status(400).json({errors: errors.array() });
  }

  try {
    const { project } = req.body;

    // Extraer proyecto
    const isProject = await Project.findById(project);

    if ( !isProject ) {
      return res.status(404).json({ msg: 'El proyecto no ha sido econtrado' });
    }

    // Check project owner
    if ( isProject.owner.toString() !== req.user.id ) {
      return res.status(401).json({ msg: 'No estas autorizado para crear una tarea' });
    }

    // Create task
    const task = new Task(req.body);

    await task.save();
    res.json({task});
  } catch (error) {
    console.log(error);
    return res.status(500).send('Hubo un error en el servidor al crear la tarea');
  }
}

// Get tasks by project
exports.getTasks = async (req, res) => {
  try {
    const { project } = req.query;
    
    // Get project
    const isProject = await Project.findById(project);

    if (isProject === null) return;

    if ( !isProject ) {
      return res.status(404).json({ msg: 'El proyecto no ha sido econtrado' });
    }

    // validates project owner
    if ( isProject.owner.toString() !== req.user.id ) {
      return res.status(401).json({ msg: 'No estas autorizado para ver las tareas' });
    }

    // Get tasks by project
    const tasks = await Task.find({ project });

    res.json({tasks});

  } catch (error) {
    console.log(error);
    return res.status(500).send('Hubo un error en el servidor al crear la tarea');
  }
}

exports.updateTask = async (req, res) => {
  try {
    const { name, status, project } = req.body;

    // verify is task exists
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: 'La tarea no existe' });
    }

    // Get project
    const isProject = await Project.findById(project);

    // verify project owner
    if ( isProject.owner.toString() !== req.user.id ) {
      return res.status(401).json({ msg: 'No estas autorizado para agregar una tarea' });
    }

    // Create an object with updated info
    const newTask = {};

    newTask.name = name;

    newTask.status = status;

    // Save task
    task = await Task.findOneAndUpdate(
      { _id: req.params.id },
      newTask,
      { new: true }
    );

    res.json({task});

  } catch (error) {
    console.log(error);
    return res.status(500).send('Hubo un error en el servidor al actualizar la tarea');
  }
}

exports.deleteTask = async (req, res) => {
  try {
    const { project } = req.query;
    console.log(req.query)

    // verify is task exists
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: 'La tarea no existe' });
    }

    // Get project
    const isProject = await Project.findById(project);

    // verify project owner
    if ( isProject.owner.toString() !== req.user.id ) {
      return res.status(401).json({ msg: 'No estas autorizado para eliminar esta tarea' });
    }

    // eliminar
    await Task.findOneAndRemove({_id: req.params.id});

    res.json({ msg: 'La tarea ha sido eliminada con éxito' });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Hubo un error en el servidor al eliminar la tarea');
  }
}