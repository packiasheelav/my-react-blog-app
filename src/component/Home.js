import React from 'react';
import {withRouter} from 'react-router-dom';

const Home = (props) => {
  let DisplayPosts = props.posts.map(posts => {
    return (
      <div className="display_posts" onClick={()=>props.handleSelection(posts.id)}>
        <div> {posts.title}</div>
        <div>{posts.category}</div>
      </div>
    );
  });
  return (
    <div className='selectPost'>
      {DisplayPosts}
    </div>

  );
}

export default withRouter(Home);