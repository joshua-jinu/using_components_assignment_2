import React, {useState} from 'react'

function Likebutton({isLiked}) {
    const [liked, setLiked] = useState(isLiked);
    const btnStyle = {
        backgroundColor: liked?'#e63946':'#555',
        padding: '1rem',
        borderRadius: '10px'
    }
    return (
    <button style={btnStyle} onClick={()=>{setLiked(prev=>!prev)}}>
        {liked ? '❤️ Liked' : '♡ Like'}
    </button>
  )
}

export default Likebutton;