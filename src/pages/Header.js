import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      pushedName: '',
      loadingStatus: false,
    };
  }

  async componentDidMount() {
    this.setState({ loadingStatus: true });

    const test = await getUser();

    const { name } = test;

    this.setState({ pushedName: name });

    this.setState({ loadingStatus: false });
  }

  render() {
    const {
      pushedName,
      loadingStatus,
    } = this.state;

    return (loadingStatus ? <Loading />
      : (
        <header data-testid="header-component">
          <p> alguma coisa aqui</p>
          <p data-testid="header-user-name">
            O nome é:
            { pushedName }
          </p>
        </header>
      )
    );
  }
}

export default Header;
