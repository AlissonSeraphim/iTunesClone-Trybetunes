import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  render() {
    const {
      LoginName,
      disableButton,
      onInputChange,
      onClickAction,
    } = this.props;

    return (
      <form>
        <div data-testid="page-login">
          <label>
            Nome:
            <input
              type="text"
              data-testid="login-name-input"
              name="LoginName"
              value={ LoginName }
              onChange={ onInputChange }
            />
          </label>
          <button
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
