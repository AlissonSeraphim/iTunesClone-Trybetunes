import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  state = {
    favoritesArray: [],
    loading: false,
  };

  favoriteGetChecked = async (albumObject, id) => {
    this.setState({ loading: true });

    const { favoritesArray } = this.state;
    this.setState((prevState) => ({
      favoritesArray: [...prevState.favoritesArray, id],
    }));

    console.log(favoritesArray);

    await addSong(albumObject);

    this.setState({ loading: false });
  };

  render() {
    const {
      getAlbum,
    } = this.props;

    const {
      favoritesArray,
      loading,
    } = this.state;

    return (
      <div>
        { loading ? <Loading /> : (getAlbum.map((element, index) => (
          <div
            className="tracks"
            key={ `Track ${index}` }
          >
            <p>
              { `Track ${index + 1}:` }
              { element.trackName }
            </p>
            <audio
              data-testid="audio-component"
              src={ element.previewUrl }
              controls
            >
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>{ element.trackName }</code>
            </audio>
            <label data-testid={ `checkbox-music-${element.trackId}` }>
              Favorita
              <input
                type="checkbox"
                name="favoriteCheck"
                checked={ favoritesArray?.some((id) => id === element.trackId) }
                onChange={ () => (this.favoriteGetChecked(element, element.trackId)) }
              />
            </label>
          </div>
        )))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  getAlbum: PropTypes.arrayOf.isRequired,
};

export default MusicCard;
