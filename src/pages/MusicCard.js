import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const {
      getAlbum,
    } = this.props;

    return (
      <div>
        { getAlbum.map((element, index) => (
          <div
            className="tracks"
            key={ `Musica ${index}` }
          >
            <p>
              { `Musica ${index + 1}-` }
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
          </div>
        ))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  getAlbum: PropTypes.arrayOf.isRequired,
};

export default MusicCard;
