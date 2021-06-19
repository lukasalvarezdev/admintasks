import styled from 'styled-components';

export const ProjectCont = styled.div`
  padding: 7px 0 7px 40px;
  border-radius: 5px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #A0A3AA;
  transition: .4s ease-in-out;

  &:hover {
    background-color: #EDF6FF;
    color: #198CFF;
  }

  h5 {
    font-size: 14px;
  }
`;

export const ProjectsCont = styled.div`
  display: flex;
`;

export const AsideCont = styled.div`
  background-color: #198CFF;
  height: 100vh;
  min-height: 700px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .icon-cont {
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    position: relative;
    &:hover {
      i {
        background-color: rgba(255, 255, 255, 0.3);
        padding: 10px;
        border-radius: 30px;
      } 
    }
  }
`;

export const IconShowMenu = styled.i`
  transition: .4s ease-in-out;
  transform: ${({ open }) => open ? 'rotate(180deg)' : 'rotate(0)' };
`;

export const ProjectsAsideCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  z-index: 9000;
  width: 250px;
  height: 100vh;
  min-height: 700px;
  background-color: white;
  padding: 30px;
  -webkit-box-shadow: 3px 0px 7px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 3px 0px 7px 0px rgba(0,0,0,0.1);
  box-shadow: 3px 0px 7px 0px rgba(0,0,0,0.1);
  color: #198CFF;
  left: ${({ isprojectsmenu }) => isprojectsmenu ? '80px' : '-100%' };
  transition: left .4s ease-in-out;


  @media only screen and (min-width: 768px) {
    position: relative;
    left: 0;
  }

  .projects-title {
    display: flex;
    i {
      margin-right: 15px;
    }

    h4 {
      display: inline-block;
    }
  }

  .add-project {
    text-align: center;

    i {
      background-color: #198CFF;
      color: white;
      padding: 15px;
      border-radius: 40px;
      cursor: pointer;
      transition: .2s ease-in-out;

      &:hover {
        transform: scale(1.04)
      }
    }
  }
`;

export const FormAddProject = styled.form`
  position: absolute;
  z-index: 10000;
  width: 100%;
  left: 0;
  bottom: 30px;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.3);
  transition: transform .4s ease-in-out;
  transform: ${({ isprojectform }) => isprojectform ? 'scale(1)' : 'scale(0)' };

  .input_project-name {
    width: 100%;
    height: 40px;
    font-size: 14px;
    margin-bottom: 20px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid #A0A3AA;
    color: #A0A3AA;
  }

  .btn {
    border: none;
    border-radius: 5px;
    padding: 6px 20px;
    font-weight: bold;
    font-family: 'Rubik', sans-serif;
    color: white;
    cursor: pointer;
  }

  .submit_add-project {
    background-color: #198CFF;
    margin-bottom: 20px;
  }

  .cancel_add-project {
    background-color: #F16663;
  }

  .error {
    margin-top: 20px;
    color: red;
    font-size: 14px;
  }
`;

export const IconCont = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  position: relative;

  &:hover {
    i.aside-main-icon {
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 30px;
      transition: .4s ease-in-out;
    }

    .info-task,
    .info-user {
      transform: scale(1);
    }
  }

  .info-task {
    width: 200px;
    position: absolute;
    top: 15px;
    left: 70%;
    z-index: 10000;
    padding: 5px 20px;
    border-radius: 5px;
    background-color: #43464B;
    color: white;
    font-size: 14px;
    transition: .4s ease-in-out;
    transform: scale(0);
  }

  .info-user {
    width: 300px;
    position: absolute;
    bottom: 50px;
    left: 70%;
    z-index: 10000;
    padding: 20px;
    border-radius: 5px;
    background-color: #43464B;
    color: white;
    font-size: 14px;
    transition: .4s ease-in-out;
    transform: scale(0);
    cursor: default;

    .log-out-cont {
      display: flex;
      align-items: center;
      cursor: pointer;

      .log-out-button {
        margin-right: 15px;

        &:hover {
          transition: .4s ease-in-out;
          transform: scale(1.2);
        }
    }
    }
  }
`;

export const ProjectsListCont = styled.div`
  margin-top: 20px;
`;

// export const LogOutCont = styled.div`
// `;