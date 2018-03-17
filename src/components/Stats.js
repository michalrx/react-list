import React, { Component } from 'react';

const ratingNames = [
    'Not rated yet',
    'very poor',
    'poor',
    'avg',
    'good',
    'very good',
]

const getStats = data => data.reduce((prev, current) => {
    const ratingName = ratingNames[current.rating]
    if (prev[ratingName]) {
        prev[ratingName] += 1
    } else {
        prev[ratingName] = 1
    }
    return prev
}, {})

class Stats extends Component {
    render() {
        const stats = getStats(this.props.data)

        console.log(stats)

        return (
            <div>
                {ratingNames.map(item => (
                    <div key={item}>{item}: {stats[item]}</div>
                ))}
            </div>
        );
    }
}

export default Stats;