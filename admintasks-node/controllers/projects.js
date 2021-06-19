const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.createProject = async (req, res) => {
  try {
    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
      return res.status(400).json({ errors: errors.array() });
    }

    const project = new Project(req.body);

    // Asign a owner to each project
    project.owner = req.user.id;

    project.save();

    res.json({ project });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Hubo un error al crear el proyecto' });
  }
}

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ owner: req.user.id });

    res.json({projects});
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor al obtener los proyectos');
  }
}

exports.deleteProject = async (req, res) => {
  try {
    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Get project by id
    let project = await Project.findById(req.params.id);

    // Check if project exists
    if (!project) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' });
    }

    // Verify owner
    if ( project.owner.toString() !== req.user.id ) {
      return res.status(401).json({ msg: 'No estas autorizado para borrar el projecto' });
    }

    // Delete
    await Project.findOneAndRemove(
      { _id: req.params.id },
    );

    res.json({ msg: 'Proyecto eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar el proyecto');
  }
}