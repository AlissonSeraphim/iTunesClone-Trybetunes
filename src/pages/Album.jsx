import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

class Album extends React.Component {
  state = {
    getAlbum: [],
    artistBand: '',
    albumName: '',
    getFavoriteCheck: false,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    console.log('EU SOU UM ID', id);

    this.setState({ getFavoriteCheck: true });

    const favoriteSongs = await getFavoriteSongs(id);
    console.log(favoriteSongs);

    //  fetch getAlbum
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
      getFavoriteCheck: false,
    });
  }

  render() {
    const {
      getAlbum,
      artistBand,
      albumName,
      getFavoriteCheck,
    } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        {
          getFavoriteCheck ? <Loading />
            : (
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
            )
        }
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
