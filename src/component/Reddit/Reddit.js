import React, { Component } from 'react';
import Request from 'superagent';
import './Reddit.css';
class Reddit extends Component{

  constructor(){
    super();
    this.state={
      stories:[]
    }

  }

  componentWillUpdate(nextProps,nextState){
    //console.log('willupdate',nextProps, nextState);
  }

  componentDidUpdate(prevProps,prevState){
    //console.log('didupdate',prevProps,prevState);
  }

  componentDidMount(){
    this.readandriod('default')
  }

  readandriod(status){
    var query = {};
    switch(status){
      case 'after':
        query[status] = this.state.stories[this.state.stories.length - 1].data.name;
        break;
      case 'before':
        query[status] = this.state.stories[0].data.name;
        break;
      default:
        query = {};
      }

    Request.get('https://www.reddit.com/r/Android/new/.json')
           .query(query)
           .end((err,res)=>{
             var stories = status === 'after' ? this.state.stories.concat(res.body.data.children) : res.body.data.children.concat(this.state.stories);
             this.setState({
               stories:stories
             })
           })
  }

  getthumb(data){
    if(data.thumbnail.startsWith('http')){
       return <img src={data.thumbnail} className="img-thumbnail" alt="thumbnail"/>
    }else{
      return;
    }
  }


  render(){
    if(this.state.stories.length > 0){
      var newstory = <div className="text-center"><button className="btn btn-default" onClick={()=>this.readandriod('before')}>New Stories</button></div>
      var oldstory = <div className="text-center"><button className="btn btn-default" onClick={()=>this.readandriod('after')}>Old Stories</button></div>
    }

    return(
      <div>
        {newstory}
        <ul className="list-group">
          {this.state.stories.map((stories,s)=>
            <li className="list-group-item storycontainer" key={s}>
              <div className="storythumb">
                {this.getthumb(stories.data)}
              </div>
              <h5>{stories.data.title}</h5>
              <p>{stories.data.domain}</p>
            </li>
          )}
        </ul>
        {oldstory}
      </div>
    )
  }
}

export default Reddit;
