import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

import { createUser } from './services/userAPI';
import Loading from './pages/Loading';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      LoginName: '',
      isLoading: false,
      afterLoading: false,
      artistInput: '',
    };
  }

  onInputChange({ target }) {
    const { name } = target;

    this.setState({
      [name]: target.value,
    });
  }

  onClickAction = async () => {
    const {
      LoginName,
    } = this.state;

    this.setState({ isLoading: true, afterLoading: false });

    await createUser({ name: LoginName });

    this.setState({ isLoading: false, afterLoading: true });
  };

  render() {
    const {
      LoginName,
      afterLoading,
      isLoading,
      artistInput,
    } = this.state;

    const limitCharacters = 3;
    const disableButton = LoginName.length < limitCharacters;

    const limitCharactersArtist = 2;
    const disableArtistButton = artistInput.length < limitCharactersArtist;

    return (
      <div>
        <p>TrybeTunes</p>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (isLoading ? <Loading /> : <Login
              LoginName={ LoginName }
              disableButton={ disableButton }
              onClickAction={ this.onClickAction }
              onInputChange={ this.onInputChange }
            />) }
          >
            { afterLoading && <Redirect to="/search" />}
          </Route>
          <Route
            exact
            path="/search"
            render={ () => (
              <Search
                artistInput={ artistInput }
                disableArtistButton={ disableArtistButton }
                onInputChange={ this.onInputChange }
              />
            ) }
          />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
