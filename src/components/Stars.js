import React from 'react';

const blackStar = '★'
const baseStars = Array(5).fill('☆')
const getStars = rating => baseStars.map(
    (item, index) => rating > index ? blackStar :item
)

const Stars = (props) => (
    <div>
        {getStars(props.rating)}
    </div>
);

export default Stars;
