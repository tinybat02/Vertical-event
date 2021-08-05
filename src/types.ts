import { DataFrame, Field, Vector } from '@grafana/data';

export interface PanelOptions {
  order: string[];
}

export const defaults: PanelOptions = {
  order: [],
};

export interface Buffer extends Vector {
  buffer: number[];
}

export interface FieldBuffer extends Field<any, Vector> {
  values: Buffer;
}

export interface Frame extends DataFrame {
  fields: FieldBuffer[];
}

export interface ItemData {
  label: string;
  in: number;
  out: number;
}
