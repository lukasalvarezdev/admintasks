import React, { useContext, Fragment } from 'react';
import authContext from '../../../context/auth/authContext';
import projectContext from '../../../context/projects/projectContext';
import Icon from './Icon';
import { AsideCont, IconShowMenu, IconCont } from '../styled/ProjectsStyled';

const Aside = () => {

  const authsContext = useContext(authContext);
  const { user, logOut } = authsContext;

  const projectsContext = useContext(projectContext);
  const { isprojectsmenu, openMenu, closeMenu } = projectsContext;

  const openCloseMenu = () => {
    if (isprojectsmenu) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  return (
    <AsideCont>
      <div className="main-icons">
        { window.innerWidth < 768 ?
          (
            <div
              className="icon-cont"
              onClick={ openCloseMenu } 
            >
              <IconShowMenu
                className="material-icons-outlined icon_show-menu"
                open={isprojectsmenu}
              >forward</IconShowMenu>
            </div>
          ) : null
        }
        <Icon
          key="1"
          name="check"
        />
        <Icon
          key="2"
          name="pending"
        />
        <Icon
          key="3"
          name="view_agenda"
        />
      </div>
      <div className="second-icons">
      <IconCont>
        <i className="material-icons-outlined aside-main-icon">account_circle</i>
        <span className="info-user">
          { user ?
            (
              <Fragment>
                <p>Nombre: {user.name}</p> <br />
                <p>Cuenta: {user.mail}</p> <br />
              </Fragment>
            ) : null
          }
          <p
            className="log-out-cont"
            onClick={ () => logOut() }
          >
            <i className="material-icons-outlined log-out-button">exit_to_app</i>
            Cerrar sesión
          </p>
        </span>
      </IconCont>
      </div>
    </AsideCont>
  );
}
 
export default Aside;