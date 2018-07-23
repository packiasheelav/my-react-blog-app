import React from 'react';
import {
    NavLink
}from 'react-router-dom';
import './Style.css';
const posts=(props)=>{
    console.log(props);

    let selectedPostForDisplay = props.selectedPost.map(posts => {
        return (
          <div className="selected_post">
            <div> {posts.title}</div>
            <div>{posts.category}</div>
            <div>{posts.postContent}</div>
            <button  onClick={()=>props.handleDelete(posts.id)} >Delete</button>
          </div>
        );
      });
      console.log('displaySelected post'+ selectedPostForDisplay);
      return(
          <div>
       <li className='AddNewPost'><NavLink exact activeStyle ={{color:'orange'}} to="/" >Back to Home</NavLink></li>
        <div>{selectedPostForDisplay}</div>
          </div>
      )

}
export default posts;