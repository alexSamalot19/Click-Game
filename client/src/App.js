import React, { Component } from "react";
import Thumbnail from './components/Thumbnail';
import Score from './components/Score';

class App extends Component {

  state = {
    tiles: [

      'https://i.pinimg.com/originals/2e/d7/85/2ed785e9b43aca04eef9e62ab59b325d.jpg',
      'https://i.pinimg.com/originals/7a/7e/ee/7a7eeeb13273cc58eb7ef6db5149a8e1.jpg',
      'https://i.pinimg.com/originals/13/5a/0e/135a0e21b3142eac2caee8ea7032106c.jpg'
    ],
    // shuffled:[]
    score: 0,
    topScore: 0
  };

  clickedTiles = [];

  handleTileClick = (evt) => {
    //record click
    console.log(evt)

    const clickedTile = evt.target.src;

    
    if (this.clickedTiles.includes(clickedTile)) {
this.clickedTiles.length = 0;
      this.setState({ score: 0 });
      // alert('ERR already clicked score: ', this.state.score);
      return;

    }

    // this.setState({ score: this.state.score + 1 });

    const newScore = this.state.score + 1;
    const topScore = newScore > this.state.topScore ?
      newScore :
      this.state.topScore;

    this.clickedTiles.push(clickedTile);


    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());
    this.setState({
      tiles: shuffled,
      score: newScore,
      topScore: topScore
    });
  }



  render() {
    return (
      <div className="App">
        <Score score={this.state.score} topScore={this.state.topScore} />

        {
          this.state.tiles.map((tile, idx) => <Thumbnail
            src={tile} key={idx} onClick={this.handleTileClick}
          />
          )};
      </div>
    );
  }
}

export default App;
