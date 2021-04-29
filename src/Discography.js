import React, { Component } from "react";
import "./Discography.css";

class Discography extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  componentDidMount() {
    const discographyUrl =
      "https://gist.github.com/emersonbrogadev/74da958938b36ee5baf14a08a81aa337#file-albums-json";

    fetch(discographyUrl).then((result) => {
      result
        .json()
        .then((result) => {
          console.log('result')
          this.setState({ data: result.data || [] });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  render() {
    return <h1>Discography</h1>;
  }
}

export default Discography;
