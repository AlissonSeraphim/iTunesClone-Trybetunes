import React from 'react';
import './styles/Loading.css';

class Loading extends React.Component {
  render() {
    return (
      <section className="loading-container">
        <div className="lds-default">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <h1>Carregando... </h1>
      </section>
    );
  }
}

export default Loading;
