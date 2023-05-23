import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

import './styles/Header.css';
import trybeLogo from '../images/trybetrybe.svg';
import tunesLogo from '../images/tunestunes.svg';
import phone from '../images/Ellipse 1 (Stroke)phone.svg';
import stroke1 from '../images/Line 1 (Stroke)stroke1.svg';
import stroke2 from '../images/Line 3 (Stroke)stroke2.svg';
import stroke3 from '../images/Line 2 (Stroke)stroke3.svg';
import stroke4 from '../images/Line 9 (Stroke)stroke4.svg';
import strokeLeft from '../images/Line 6 (Stroke)strokeleft.svg';
import strokeRight from '../images/Line 7 (Stroke)strokeright.svg';
import searchIcon from '../images/Vectorsearch.svg';
import favoriteIcon from '../images/Vectorfavorite.svg';
import profileIcon from '../images/Vectorprofileicon.svg';
import profileHead from '../images/Vectorhead.svg';

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
      <header className="container" data-testid="header-component">
        <div>
          <img src={ trybeLogo } alt="trybe logo" className="trybelogo" />
          <img src={ tunesLogo } alt="trybe logo" className="tuneslogo" />
          <img src={ strokeLeft } alt="strokeLeft" className="strokeLeft" />
          <img src={ strokeRight } alt="strokeRight" className="strokeRight" />
          <img src={ stroke1 } alt="trybe logo" className="stroke1" />
          <img src={ stroke2 } alt="trybe logo" className="stroke2" />
          <img src={ stroke3 } alt="trybe logo" className="stroke3" />
          <img src={ stroke4 } alt="trybe logo" className="stroke4" />
          <img src={ phone } alt="trybe logo" className="phone" />
        </div>
        <div className="name-container">
          <div className="avatarIcon" />
          <p className="name" data-testid="header-user-name">
            { pushedName }
          </p>
        </div>
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
          <img src={ profileHead } alt="profileHead" className="profileHead" />
          <Link to="/profile" className="profile" data-testid="link-to-profile">
            Profile
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
