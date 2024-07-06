import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebaroption.css"

const Sidebaroption = ({src,Icon,title}) => {
  return (
    <div className='sidebaroption'>
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}
      <p>{title}</p>
    </div>
  );
}

export default Sidebaroption;
