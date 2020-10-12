import React from 'react';
import { IconCont } from '../styled/ProjectsStyled';

const Icon = ({name}) => (
  <IconCont>
    <i className="material-icons-outlined aside-main-icon">{name}</i>
    <span className="info-task">Tareas completadas: 28</span>
  </IconCont>
);
 
export default Icon;