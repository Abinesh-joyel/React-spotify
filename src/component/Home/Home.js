import React, { Component } from 'react';
import Request from 'superagent';
import {Link} from "react-router";
class Home extends Component{

  constructor(){
    super();
    this.state = {
      artist:[]
    }
  }

  searchsong(){
    let key = this.refs.search.value;
    Request.get(`https://api.spotify.com/v1/search?query=${key}&offset=0&limit=20&type=artist&market=US`)
      .end((err,res)=>{
        this.setState({
          artist:res.body.artists.items
        })
      })
  }

  render(){
    return(
      <div>
        <h1>Need Music?</h1>
        <p className="lead">use the ngSpotify app to browse for the new release and find your favourite music</p>
        <form>
          <div className="form-group">
              <input type="text" className="form-control" name="searchsong" placeholder="search music..." ref="search" onChange={this.searchsong.bind(this)}/>
          </div>
        </form>
        <div>
            {this.state.artist.map((artist,a)=>
              <div className="row" key={a}>
                <div className="col-md-12">
                  <div className="search-res well">
                    <h4><Link to={`/artist/${artist.id}`}>{artist.name}</Link></h4>
                    <div>
                      <strong>Genres</strong>
                      {artist.genres.map((genres,g) =>
                        <span key={g}>{genres}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default Home;
