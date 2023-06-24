import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';

import './styles/Search.css';

class Search extends React.Component {
  render() {
    const {
      artistInput,
      onInputChange,
      disableArtistButton,
      onClickArtist,
      checkReady,
      getArray,
      afterClear,
    } = this.props;

    return (
      <>
        <Header />
        <form>
          <div className="search-container">
            <div className="form-container">
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
                className="search-button"
                data-testid="search-artist-button"
                name="disableArtistButton"
                disabled={ disableArtistButton }
                onClick={ onClickArtist }
              >
                Pesquisar
              </button>
            </div>
            <div className="searchAlbum-container">
              {checkReady && (
                <h2 className="album-from">{`Resultado de álbuns de: ${afterClear}`}</h2>
              )}
              {getArray.map((album) => (
                <div className="eachCard" key={ album.collectionId }>
                  <p>{`Artist ID: ${album.artistId}`}</p>
                  <p>{`Artist: ${album.artistName}`}</p>
                  <p>{`Album ID: ${album.collectionId}`}</p>
                  <p>{`Album: ${album.collectionName}`}</p>
                  <p>{`Price: ${album.collectionPrice}$`}</p>
                  <img
                    src={ album.artworkUrl100 }
                    alt={ `Imagem do album: ${album.collectionName}` }
                  />
                  <p>{`Release Date: ${album.releaseDate}`}</p>
                  <p>{`N° Tracks: ${album.trackCount}`}</p>
                  <Link
                    to={ `/album/${album.collectionId}` }
                    data-testid={ `link-to-album-${album.collectionId}` }
                  >
                    About This Album
                  </Link>
                </div>
              ))}
              {getArray.length === 0 && afterClear && (
                <h1>Nenhum álbum foi encontrado</h1>
              )}
            </div>
          </div>
        </form>
      </>
    );
  }
}

Search.propTypes = {
  artistInput: PropTypes.string.isRequired,
  afterClear: PropTypes.string.isRequired,
  disableArtistButton: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onClickArtist: PropTypes.func.isRequired,
  checkReady: PropTypes.bool.isRequired,
  getArray: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.number.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionPrice: PropTypes.number.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
  })).isRequired,
};

export default Search;
