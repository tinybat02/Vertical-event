import React from 'react';
interface ItemData {
  text: string;
  label: string;
  time: string;
}

const VerticalItem = ({ data }: { data: ItemData }) => {
  return (
    <div className="line-item">
      <span className="label">{data.label}</span>
      <br />
      <span className="date">{data.time}</span>
      <p>{data.text}</p>
    </div>
  );
};

export default VerticalItem;
