import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Search extends React.Component {
  render() {
    const {
      artistInput,
      onInputChange,
      disableArtistButton,
    } = this.props;

    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <div>
            <label>
              Banda/Artista:
              <input
                type="text"
                data-testid="search-artist-input"
                name="artistInput"
                value={ artistInput }
                onChange={ onInputChange }
              />
            </label>
            <button
              type="submit"
              data-testid="search-artist-button"
              name="disableArtistButton"
              disabled={ disableArtistButton }
              // onClick={ onClickArtist }
            >
              Pesquisar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  artistInput: PropTypes.string.isRequired,
  disableArtistButton: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Search;
