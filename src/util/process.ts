import { Frame, ItemData } from '../types';

export const processData = (series: Frame[], order: string[]) => {
  const obj: { [key: string]: { [key: string]: any } } = {};

  series.map(serie => {
    const sum = serie.fields[0].values.buffer.reduce((i, total) => i + total, 0);
    const raw_name = serie.name || '';
    let name = raw_name.startsWith('_') ? raw_name.substring(1) : raw_name;

    if (!obj[name]) obj[name] = { label: name };

    if (raw_name.startsWith('_')) obj[name].out = sum;
    else obj[name].in = sum;
  });

  if (order.length == 0)
    return {
      data: Object.values(obj) as ItemData[],
    };

  const dataList = order.map(label => {
    if (obj[label]) return obj[label];
    else return { label, in: 0, out: 0 };
  });

  return { data: dataList as ItemData[] };
};
