import React, { Component } from 'react';
import Request from 'superagent';
import './Artist.css';
class Artist extends Component {

  constructor(){
    super();
    this.state = {
      artist:{},
      albums:[]
    }
  }

  componentDidMount(){
    let artistid = this.props.params.id;
    Request.get(`https://api.spotify.com/v1/artists/${artistid}`)
           .end((err,res)=>{
            console.log(res);
             this.setState({
               artist:res.body
             })
           })

    Request.get(`https://api.spotify.com/v1/artists/${artistid}/albums`)
           .end((err,res)=>{
             console.log(res);
             this.setState({
               albums:res.body.items
             })
           })
  }

  render(){
    let artkey = Object.keys(this.state.artist);
    if(artkey.length > 0){
      if(this.state.artist.images.length > 0){
          var val = <img src={this.state.artist.images[2].url} className="artist-thumb" alt="artistpic" />;
      }
      var genres = this.state.artist.genres.map((genres,g) => {
             return <span key={g}>{genres}</span>
           })
    }
    return(
      <div>
        <header className="artist-header">
          <div>
          {val}
          </div>
          <h1>{this.state.artist.name}</h1>
          <p>Genres: {genres}</p>
        </header>
        <div className="artist-albums">
          <div className="row">
             {this.state.albums.map((album,a) =>
               <div className="col-md-3 col-sm-4" key={a}>
                <div className="well album">
                  <img src={album.images[1].url} className="album-thumb img-thumbnail" alt="albumpic"/>
                  <h4>{album.name}</h4>
                  <a className="btn btn-default btn-block">Album Details</a>
                </div>
               </div>
             )}
          </div>
        </div>
      </div>
    )
  }
}

export default Artist;
