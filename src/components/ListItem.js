import React from 'react';
import Stars from './Stars'


const ListItem = (props) => {
    const { title, image, rating } = props

    return (
      <div>
        <div>
          {image ?
            <img src={image} alt="error"/> :
            <span>No image :(</span>
          }
        </div>
        <div>{title}</div>
        <div><Stars rating={rating}/></div>
      </div>
    );
}

export default ListItem;
