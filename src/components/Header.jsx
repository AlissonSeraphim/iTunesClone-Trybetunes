import React from 'react';
import { Link } from 'react-router-dom';
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
          <p data-testid="header-user-name">
            O nome é:
            { pushedName }
          </p>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </header>
      )
    );
  }
}

export default Header;
