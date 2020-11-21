import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts:[]};
  }

  //this lifecycle methid will get called only once
  // when app rendered successfully
  componentDidMount(){
    //api call
    fetch('https://jsonplaceholder.typicode.com/posts').then(resp=>resp.json())
    .then(resp=>this.setState({posts:resp}))
  }
  render() {
    return (
      <div >
      <h1 align='center'>React App</h1>
      {this.state.posts.map(post=><div key={post.id}>{post.id}.{post.title}</div>)}
      </div>
    );
  }
}