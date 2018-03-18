import React from 'react';
import { ratingNames , getStats } from "../utils";

const Stats = (props) => {
    const stats = getStats(props.data)

    return (
      <div>
        {ratingNames.map(item => (
          <div key={item}>{item}: {stats[item] || 0}</div>
        ))}
      </div>
    );
}

export default Stats;
