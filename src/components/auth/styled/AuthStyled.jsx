import styled from 'styled-components';

export const LoginCont = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
  }

  .white-part {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media only screen and (min-width: 768px) {
      width: 65%;
    }

    .white-part-cont {
      h1 {
        color: #198CFF;
      }
    }
  }

  .blue-part {
    display: none;
    height: 100vh;
    background-color: #198CFF;
    color: white;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 0 30px;

    @media only screen and (min-width: 768px) {
      display: flex;
      width: 35%;
    }

    a {
      margin-top: 30px;
      display: inline-block;
      text-decoration: none;
      background-color: #ffffff;
      padding: 10px 30px;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      font-family: 'Rubik', sans-serif;
      font-size: 14px;
      color: #198CFF;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.95);
      }
    }
  }
`;

export const RegisterCont = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
  }

  .primero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media only screen and (min-width: 768px) {
      width: 65%;
    }

    .primero-cont {
      h1 {
        color: #198CFF;
      }
    }
  }

  .segundo {
    display: none;
    height: 100vh;
    background-color: #198CFF;
    color: white;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 0 30px;

    @media only screen and (min-width: 768px) {
      display: flex;
      width: 35%;
    }

    a {
      margin-top: 30px;
      display: inline-block;
      text-decoration: none;
      background-color: #ffffff;
      padding: 10px 30px;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      font-family: 'Rubik', sans-serif;
      font-size: 14px;
      color: #198CFF;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.95);
      }
    }
  }
`;

export const LoginFormCont = styled.form`
  background-color: #FFFFFF;
  text-align: center;
  margin: 0 auto;
  padding: 30px;
  max-width: 400px;

  .form-part {
    position: relative;
    margin-bottom: 20px;

    label {
      background-color: #FFFFFF;
      position: absolute;
      left: 15px;
      top: 27%;
      color: #adadad;
      transition: all .4s ease-in-out;
      pointer-events: none;
      z-index: 1000;
    }

    .form-field {
      border: 1.3px solid #adadad;
      height: 40px;
      width: 100%;
      border-radius: 5px;
      display: block;
      outline: none;
      transition: all .7s ease-in-out;
      padding: 0 20px;
      font-size: 16px;
      color: #636363;

      &:focus {
        border: 1.3px solid #198CFF;
      }

      &:focus ~ label {
        top: -8px;
        left: 15px;
        font-size: 12px;
        padding: 0 5px;
        color: #198CFF;
        font-weight: 600;
      }

      &:valid ~ label {
        top: -8px;
        left: 15px;
        font-size: 12px;
        padding: 0 5px;
        color: #198CFF;
        font-weight: 600;
      }
    }

    span {
      font-size: 14px;
    }


    .form-submit {
      background-color: #198CFF;
      padding: 7px 30px;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      font-family: 'Rubik', sans-serif;
      font-size: 14px;
      color: #FFFFFF;
      cursor: pointer;

      &:hover {
        background-color: #3198ff;
      }
    }
  }
`;

export const LoginInputCont = styled.div`
    position: relative;
    margin-bottom: 20px;

    label {
      background-color: #FFFFFF;
      position: absolute;
      left: 15px;
      top: 27%;
      color: #adadad;
      transition: all .4s ease-in-out;
      pointer-events: none;
      z-index: 1000;
    }

    .form-field {
      border: 1.3px solid #adadad;
      height: 40px;
      width: 100%;
      border-radius: 5px;
      display: block;
      outline: none;
      transition: all .7s ease-in-out;
      padding: 0 20px;
      font-size: 16px;
      color: #636363;

      &:focus {
        border: 1.3px solid #198CFF;
      }

      &:focus ~ label {
        top: -8px;
        left: 15px;
        font-size: 12px;
        padding: 0 5px;
        color: #198CFF;
        font-weight: 600;
      }

      &:valid ~ label {
        top: -8px;
        left: 15px;
        font-size: 12px;
        padding: 0 5px;
        color: #198CFF;
        font-weight: 600;
      }
    }
`;

export const RegisterFormCont = styled.form`
  background-color: #FFFFFF;
  text-align: center;
  margin: 0 auto;
  padding: 30px;
  max-width: 400px;

  .form-part {
    position: relative;
    margin-bottom: 20px;

    label {
      background-color: #FFFFFF;
      position: absolute;
      left: 15px;
      top: 27%;
      color: #adadad;
      transition: all .4s ease-in-out;
      pointer-events: none;
      z-index: 1000;
    }

    .form-field {
      border: 1.3px solid #adadad;
      height: 40px;
      width: 100%;
      border-radius: 5px;
      display: block;
      outline: none;
      transition: all .7s ease-in-out;
      padding: 0 20px;
      font-size: 16px;
      color: #636363;

      &:focus {
        border: 1.3px solid #198CFF;
      }

      &:focus ~ label {
        top: -8px;
        left: 15px;
        font-size: 12px;
        padding: 0 5px;
        color: #198CFF;
        font-weight: 600;
      }

      &:valid ~ label {
        top: -8px;
        left: 15px;
        font-size: 12px;
        padding: 0 5px;
        color: #198CFF;
        font-weight: 600;
      }
    }

    span {
      font-size: 14px;
    }


    .form-submit {
      background-color: #198CFF;
      padding: 7px 30px;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      font-family: 'Rubik', sans-serif;
      font-size: 14px;
      color: #FFFFFF;
      cursor: pointer;

      &:hover {
        background-color: #3198ff;
      }
    }
  }
`;

export const RegisterInputCont = styled.div`
    position: relative;
    margin-bottom: 20px;

    label {
      background-color: #FFFFFF;
      position: absolute;
      left: 15px;
      top: 27%;
      color: #adadad;
      transition: all .4s ease-in-out;
      pointer-events: none;
      z-index: 1000;
    }

    .form-field {
      border: 1.3px solid #adadad;
      height: 40px;
      width: 100%;
      border-radius: 5px;
      display: block;
      outline: none;
      transition: all .7s ease-in-out;
      padding: 0 20px;
      font-size: 16px;
      color: #636363;

      &:focus {
        border: 1.3px solid #198CFF;
      }

      &:focus ~ label {
        top: -8px;
        left: 15px;
        font-size: 12px;
        padding: 0 5px;
        color: #198CFF;
        font-weight: 600;
      }

      &:valid ~ label {
        top: -8px;
        left: 15px;
        font-size: 12px;
        padding: 0 5px;
        color: #198CFF;
        font-weight: 600;
      }
    }
`;