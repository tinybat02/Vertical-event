import React from 'react';
import { ItemData } from 'types';
import VerticalItem from './VerticalItem';

const VerticalLine = ({ eventData }: { eventData: ItemData[] }) => {
  return (
    <section className="line-container">
      {eventData.map((data, idx) => (
        <VerticalItem data={data} key={idx} />
      ))}
    </section>
  );
};

export default VerticalLine;
