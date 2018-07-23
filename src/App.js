import React, { Component } from 'react';
import './App.css';
import './component/Style.css'
import Links from './component/Links';
import {withRouter} from 'react-router-dom';

const posts=[
  {   id:0,
      title:'My day in integrify',
      category:'Work',
      postContent:'Happy July! Wow. I am shocked at how fast June went. I spent a lot of time writing, and it’s been exciting to see the Lord’s blessing upon this first draft'
  },
  {  id:1,
      title:'My Talk at React App',
      category:'Speech',
      postContent:'Happy July! Wow. I am shocked at how fast June went. I spent a lot of time writing, and it’s been exciting to see the Lord’s blessing upon this first draft'
  } ,
   { id:2,
      title:'My day in India',
      category:'Recreation',
      postContent:'Happy July! Wow. I am shocked at how fast June went. I spent a lot of time writing, and it’s been exciting to see the Lord’s blessing upon this first draft'
  } ,
   {  id:3,
      title:'My day in Sports',
      category:'Sport',
      postContent:'Happy July! Wow. I am shocked at how fast June went. I spent a lot of time writing, and it’s been exciting to see the Lord’s blessing upon this first draft!'
  }
]
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts:posts,
   selectedPost:[],
   deletePost:[]
    }     
}
handleSelection=(id)=>{
  console.log('i am inside handle selection'+ id);
  const newPost = this.state.posts.filter(post => post.id === id );
  this.setState({selectedPost:newPost});
  this.props.history.push('/Posts/');
}
handleCancel(){
  alert('do You Really want to leave the page without saving?');
}
handleSelectedPost(){

}
handleDelete=(id)=>{
  console.log('id in delete is  '+ id);
   const deletePosts = this.state.posts.filter(deletePost => deletePost.id !== id );
   this.setState({posts:deletePosts});
   console.log(deletePosts);
}

handleUpdate = e => {
  console.log(' i am inside the handle save ');
  console.log(e.target.post.value);
  let index=this.state.posts.length;
  let newInputData = {
    id: index,
    title: e.target.post.value,
    category: e.target.category.value,
    postContent: e.target.postContent.value
  };
  console.log(newInputData);
  let newState = { ...this.state }; //cloning the projects array
  newState.posts.push(newInputData);
  this.setState({ posts: newState.posts });
  console.log(posts);
};

  render() {
    return (
      <div className="posts">
        <Links data={this.state.posts} selectedPost={this.state.selectedPost} change={this.handleUpdate} handleSelection={this.handleSelection} handleDelete={this.handleDelete} handleCancel={this.handleCancel} handleSelectedPost={this.handleSelectedPost}/>
      </div>
    );
  }
}
export default withRouter(App);
