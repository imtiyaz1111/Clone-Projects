import React from 'react';
import "./Sidebaroption.css"
import { Avatar } from '@mui/material';

const Sidebaroption = ({src,Icon,title}) => {
  return (
    <div className='Sidebaroption'>

        {src && <Avatar src={src}/>}
        {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
}

export default Sidebaroption;
