import React, { Component } from "react";
import Thumbnail from "./components/Thumbnail";
import Score from "./components/Score";
import TopScore from "./components/TopScore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
  state = {
    tiles: [
      "/img/IMG1.png",
      "/img/IMG2.png",
      "/img/IMG3.png",
      "/img/IMG4.png",
      "/img/IMG5.png",
      "/img/IMG6.png",
      "/img/IMG7.png",
      "/img/IMG8.png",
      "/img/IMG9.png",
      "/img/IMG10.png"
    ],
    // shuffled:[]
    score: 0,
    topScore: 0
  };

  clickedTiles = [];

  handleTileClick = evt => {
    //record click
    console.log(evt);

    const clickedTile = evt.target.src;

    if (this.clickedTiles.includes(clickedTile)) {
      this.clickedTiles.length = 0;
      this.setState({ score: 0 });
      // alert('ERR already clicked score: ', this.state.score);
      return;
    }

    // this.setState({ score: this.state.score + 1 });

    const newScore = this.state.score + 1;
    const topScore =
      newScore > this.state.topScore ? newScore : this.state.topScore;

    this.clickedTiles.push(clickedTile);

    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());
    this.setState({
      tiles: shuffled,
      score: newScore,
      topScore: topScore
    });
  };

  render() {
    return (
      <div className="App">
        <div className="navbar" style={this.navbar}>
          <div className="btn btn-info">
            <h1>NBA Memory Click</h1>
            <Score score={this.state.score} />
          </div>

          <div className="btn btn-info">
            <h1>Can You Out-Click?</h1>
            <TopScore topScore={this.state.topScore} />
          </div>
        </div>
        <div className="jumbotron">
          {this.state.tiles.map((tile, idx) => (
            <Thumbnail src={tile} key={idx} onClick={this.handleTileClick} />
          ))}
          ;
        </div>
      </div>
    );
  }
}

export default App;
