import React from 'react';  
import './postcard.css';  
import Likebutton from './likebutton';

const Postcard = ({profileImage, username, content, isLiked}) => { 
  return (  
    <div className="postcard">  
      <img src={profileImage} alt={username} className="postcard-image" />  
      <div className="postcard-details">  
        <h3 className="postcard-name">{username}</h3>  
        <h4 className="postcard-price">{content}</h4>  
        <Likebutton
            isLiked={isLiked}
        />   
      </div>  
    </div>  
  );  
};  

export default Postcard;  
