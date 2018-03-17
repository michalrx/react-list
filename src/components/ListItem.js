import React, { Component } from 'react';
import Stats from './Stats';

class ListItem extends Component {
    render() {
        const { title, image, rating } = this.props;
        return (
            <div>
                {image ?
                    <img src={image} alt="" /> :
                    <span>No image:(</span>
                }
                <h3>{title}</h3>
                <p>{rating}</p>
            </div>
        );
    }
}

export default ListItem;