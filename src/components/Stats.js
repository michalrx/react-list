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

        return (
            <div>
                {/*stats.map(item => (
                    <div key={item}>{item}: 0</div>
                ))*/}
            </div>
        );
    }
}

export default Stats;