import React, { Component } from 'react';
import Header from './navbar';

class Root extends Component{
  render(){
    return(
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-12">
             {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
