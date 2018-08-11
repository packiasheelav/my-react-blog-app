import React from 'react';
import AddNewPost from './AddNewPost';
import Posts from './Posts';
import Home from './Home';
import './Style.css';
import {
    NavLink,
    Route,
    Switch,
}from 'react-router-dom';
const Links=(props)=>{
    return(
<div>
        <div className='addpost'>
        <ul className='header'>
        <li className='AddNewPost'><NavLink exact activeStyle ={{color:'orange'}} to="/" >All Posts</NavLink></li>
        <li className='AddNewPost'><NavLink exact activeStyle ={{color:'orange'}} to="/AddNewPost" >AddNewPost</NavLink></li>
        <li className='Posts'><NavLink exact activeStyle ={{color:'orange'}} to="/Posts"></NavLink></li> 
        <li className='DisplayPost'><NavLink exact activeStyle ={{color:'orange'}} to="/Home"></NavLink></li> 
        </ul>
        <Switch>
        <Route exact path="/AddNewPost"  render={()=>(<AddNewPost posts={props.data} change={props.change} handleSelectedPost={props.handleSelectedPost}/>)}/>
         <Route exact path="/" render={()=>(<Home  posts={props.data} handleSelection={props.handleSelection}/>)}/> 
         <Route exact path="/Posts" render={()=>(<Posts  posts={props.data} selectedPost={props.selectedPost} handleDelete={props.handleDelete}/>)}/> 
        <Route exact path="/Home" render={()=>(<Home  posts={props.data} handleSelectedPost={props.handleSelectedPost}/>)}/> 
        </Switch> 
        </div>
</div>
    );
}
export default Links;  