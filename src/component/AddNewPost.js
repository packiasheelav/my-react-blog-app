 import React from 'react';
import {
    NavLink
}from 'react-router-dom';

 const addNewPosts=(props)=>{
    return(
      <form onSubmit = {e => (
            e.preventDefault(),
            props.change(e))} >
      <label className='labelBox' >Title</label>
      <input className='inputBoxes'type="text" placeholder="Title" name='post' />
      <label className='labelBox'>Category</label>
      <input className='inputBoxes' name='category'/><br/>
      <label className='labelBox'>Write New Post</label>
      <textarea  className='inputBoxforTextArea' name='postContent' type='text'/><br/>
      <input type='submit' value='save' />
      <button > <li className='AddNewPost'><NavLink exact activeStyle ={{color:'orange'}} to="/" >Cancel</NavLink></li></button>
      </form>
    )
}

export default addNewPosts;