import React from 'react';
import { ItemData } from '../types';

const VerticalItem = ({ data }: { data: ItemData }) => {
  return (
    <div className="line-item">
      <span className="label">{data.label}</span>
      <br />
      <p>{`IN ${data.in}  |  OUT ${data.out}`}</p>
    </div>
  );
};

export default VerticalItem;
