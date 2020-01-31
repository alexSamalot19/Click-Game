{
  //Check if message failed
  this.state.conference === "Eastern" ? (
    <div>
      {" "}
      {this.state.EasternTiles.map((tile, idx) => (
        <Thumbnail src={tile} key={idx} onClick={this.handleTileClick} />
      ))}
    </div>
  ) : (
    <div>
      {" "}
      {this.state.WesternTiles.map((tile, idx) => (
        <Thumbnail src={tile} key={idx} onClick={this.handleTileClick} />
      ))}{" "}
    </div>
  );
}
