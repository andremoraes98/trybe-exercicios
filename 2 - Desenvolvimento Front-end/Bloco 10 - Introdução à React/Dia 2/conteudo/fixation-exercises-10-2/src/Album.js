import React from "react";

class Album extends React.Component {
  render() {
    return <section>
      <img src = { this.props.album.image } alt = { this.props.album.title }></img>
      <h2> { this.props.album.title } </h2>
      <p>Lançamento: { `${ this.props.album.releaseDate.day } / ${ this.props.album.releaseDate.month } / ${ this.props.album.releaseDate.year }` }</p>
      <p>Gravadora: { this.props.album.others.recordCompany }</p>
      <p>Formatos: { this.props.album.others.formats }</p>
    </section>
  }
}

export default Album