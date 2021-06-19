import styled from 'styled-components';

export const TasksListCont = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin: 30px 0;
    text-align: center;

    @media only screen and (min-width: 768px) {
      margin: 30px 0 30px 50px;
      padding-left: 50px;
      text-align: start;
    }
  }

  .tasks-body {
    padding-left: 20px;

    @media only screen and (min-width: 768px) {
      padding-left: 50px;
    }
  }

  .tasks-body {
    position: relative;
    top: -60px;

    @media only screen and (min-width: 768px) {
      top: -30px;
    }
  }

  .tasks-footer {
    .btn_delete-project {
      background-color: #EB5450;
      margin: 0 0 20px 20px;
      padding: 8px 30px;
      border: none;
      border-radius: 5px;
      font-family: 'Rubik', sans-serif;
      font-size: 14px;
      font-weight: bold;
      color: white;
      transition: .4s ease-in-out;
      cursor: pointer;
      outline: none;

      &:hover {
        background-color: #f16663;
      }

      @media only screen and (min-width: 768px) {
        margin: 0 0 30px 50px;
      }
    }

    .input_add-task {
      border: none;
      border-bottom: 1px solid #A0A3AA;
      color: #A0A3AA;
      outline: none;
      width: 100%;
      font-size: 16px;
      padding-left: 5px;
      padding-bottom: 5px;
      margin-bottom: 20px;

      @media only screen and (min-width: 768px) {
        width: 70%;
        margin-right: 20px;
        margin-bottom: 0;
      }
    }

    .submit_add-task {
      padding: 8px 30px;
      color: white;
      font-family: 'Rubik', sans-serif;
      font-size: 14px;
      font-weight: bold;
      background-color: #198CFF;
      border: none;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      transition: .4s ease-in-out;
    }

    .error {
      color: red;
      margin-top: 20px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 30px;
    -webkit-box-shadow: 8px 3px 7px 0px rgba(0,0,0,0.28);
    -moz-box-shadow: 8px 3px 7px 0px rgba(0,0,0,0.28);
    box-shadow: 8px 3px 7px 0px rgba(0,0,0,0.28);

    @media only screen and (min-width: 768px) {
      display: block;
    }
  }
`;

export const TaskCont = styled.div`
  display: flex;
  width: 100%;
  color: #A0A3AA;
  margin-bottom: 15px;

  .check {
    display: flex;
    align-items: center;

    i {
      vertical-align: middle;
      color: #198CFF;
      cursor: pointer;
      margin-right: 5px;
    }
  }

  .task {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s ease-in-out;
    color: #A0A3AA;

    @media only screen and (min-width: 768px) {
      margin-left: 20px;
      padding: 5px 20px 5px 40px;
    }

    &:hover {
      background-color: #EDF6FF;
      color: #198CFF;

      i {
        color: #198CFF;
      }
    }

    i {
      transition: .3s ease-in-out;
      vertical-align: middle;
      margin-right: 10px;
      color: #A0A3AA;

      &:hover {
        transform: scale(1.2);
      }
    }

    .edit-icons {
      display: flex;
    }
  }
`;
