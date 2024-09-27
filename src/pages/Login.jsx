import React from 'react';
import PropTypes from 'prop-types';

import './styles/Login.css';

import trybeLogo from '../images/trybetrybe.svg';
import tunesLogo from '../images/tunestunes.svg';
import phone from '../images/Ellipse 1 (Stroke)phone.svg';
import stroke1 from '../images/Line 1 (Stroke)stroke1.svg';
import stroke2 from '../images/Line 3 (Stroke)stroke2.svg';
import stroke3 from '../images/Line 2 (Stroke)stroke3.svg';
import stroke4 from '../images/Line 9 (Stroke)stroke4.svg';
import strokeLeft from '../images/Line 6 (Stroke)strokeleft.svg';
import strokeRight from '../images/Line 7 (Stroke)strokeright.svg';

class Login extends React.Component {
  render() {
    const { LoginName, disableButton, onInputChange, onClickAction } = this.props;

    return (
      <div className="container-login">
        <form>
          <div data-testid="page-login" className="forms-container">
            <div className="logoLogin-container">
              <img src={ trybeLogo } alt="trybe logo" className="trybelogo-login" />
              <img src={ tunesLogo } alt="trybe logo" className="tuneslogo-login" />
              <img src={ strokeLeft } alt="strokeLeft" className="strokeLeft-login" />
              <img src={ strokeRight } alt="strokeRight" className="strokeRight-login" />
              <img src={ stroke1 } alt="trybe logo" className="stroke1-login" />
              <img src={ stroke2 } alt="trybe logo" className="stroke2-login" />
              <img src={ stroke3 } alt="trybe logo" className="stroke3-login" />
              <img src={ stroke4 } alt="trybe logo" className="stroke4-login" />
              <img src={ phone } alt="trybe logo" className="phone-login" />
            </div>
            <label>
              <input
                className="name-input"
                type="text"
                data-testid="login-name-input"
                name="LoginName"
                value={ LoginName }
                onChange={ onInputChange }
                placeholder="Qual o seu nome ?"
              />
            </label>
            <button
              className="buttonLogin-input"
              type="submit"
              data-testid="login-submit-button"
              name="disableButton"
              disabled={ disableButton }
              onClick={ onClickAction }
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  LoginName: PropTypes.string.isRequired,
  disableButton: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onClickAction: PropTypes.func.isRequired,
};

export default Login;
