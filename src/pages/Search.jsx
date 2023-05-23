import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';

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
              onClick={ onClickArtist }
            >
              Pesquisar
            </button>
            {
              checkReady
              && (
                <h2>
                  {`Resultado de álbuns de: ${afterClear}`}
                </h2>
              )
            }
            <div>
              { getArray.map((album) => (
                <div className="eachCard" key={ album.collectionId }>
                  <p>{album.artistId}</p>
                  <p>{album.artistName}</p>
                  <p>{album.collectionId}</p>
                  <p>{album.collectionName}</p>
                  <p>{album.collectionPrice}</p>
                  <img
                    src={ album.artworkUrl100 }
                    alt={ `Imagem do album: ${album.collectionName}` }
                  />
                  <p>{album.releaseDate}</p>
                  <p>{album.trackCount}</p>
                  <Link
                    to={ `/album/${album.collectionId}` }
                    data-testid={ `link-to-album-${album.collectionId}` }
                  >
                    About This Album
                  </Link>
                </div>
              ))}
              {
                (getArray.length === 0 && afterClear)
              && <h1>Nenhum álbum foi encontrado</h1>
              }
            </div>
          </div>
        </form>
      </div>
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
