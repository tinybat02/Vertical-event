import React from 'react';
import eventData from '../data';
import VerticalItem from './VerticalItem';

const VerticalLine = () => {
  return (
    <section className="line-container">
      {eventData.map((data, idx) => (
        <VerticalItem data={data} key={idx} />
      ))}
    </section>
  );
};

export default VerticalLine;
