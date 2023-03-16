import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

class Album extends React.Component {
  state = {
    getAlbum: [],
    artistBand: '',
    albumName: '',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    // funciona mas não passa no teste proposto :c
    // const { href } = window.location;
    // const getUrl = href;
    // const positionID = 28;
    // const idAlbum = getUrl.slice(positionID);

    //  fetch
    const arrayObjects = await getMusics(id);
    console.log(arrayObjects);

    // testes
    const artistas = arrayObjects.map((element) => (element.artistName));
    const album = arrayObjects.map((element) => (element.collectionName));
    const musica = arrayObjects.map((element) => (element.trackName));
    const audio = arrayObjects.map((element) => (element.previewUrl));

    console.log(artistas);
    console.log(album);
    console.log(musica);
    console.log(audio);

    this.setState({
      getAlbum: arrayObjects.slice(1),
      artistBand: artistas[0],
      albumName: album[0],
    });
  }

  render() {
    const {
      getAlbum,
      artistBand,
      albumName,
    } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <h2 data-testid="artist-name">
            { artistBand }
          </h2>
          <h3 data-testid="album-name">
            { albumName }
          </h3>
          <MusicCard
            getAlbum={ getAlbum }
          />
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
