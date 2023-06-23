import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

import './styles/Header.css';
import trybeLogo from '../images/container/logo.svg';
import searchIcon from '../images/Vectorsearch.svg';
import favoriteIcon from '../images/Vectorfavorite.svg';
import profileIcon from '../images/container/icon _profile_.svg';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      pushedName: '',
      loadingStatus: false,
    };
  }

  componentDidMount() {
    this.getUserApi();
  }

  getUserApi = async () => {
    this.setState({ loadingStatus: true });
    const user = await getUser();

    const { name } = user;
    this.setState({ pushedName: name, loadingStatus: false });
  };

  render() {
    const { pushedName, loadingStatus } = this.state;

    return loadingStatus ? (
      <Loading />
    ) : (
      <header className="header-container" data-testid="header-component">
        <div>
          <img src={ trybeLogo } alt="trybe logo" className="trybelogo" />
        </div>
        <div className="name-container">
          <div className="avatarIcon" />
          <p className="name" data-testid="header-user-name">
            { pushedName }
          </p>
        </div>
        <div className="options-header">
          <div className="search-container">
            <img src={ searchIcon } alt="searchIcon" className="searchIcon" />
            <Link to="/search" className="search" data-testid="link-to-search">
              Search
            </Link>
          </div>
          <div className="favorite-container">
            <img src={ favoriteIcon } alt="favoriteIcon" className="favoriteIcon" />
            <Link
              to="/favorites"
              className="favorite"
              data-testid="link-to-favorites"
            >
              Favorites
            </Link>
          </div>
          <div className="profile-container">
            <img src={ profileIcon } alt="profileIcon" className="profileIcon" />
            <Link to="/profile" className="profile" data-testid="link-to-profile">
              Profile
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
