import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { PanelOptions /* , Frame */ } from 'types';
// import { processData } from './util/process';
import VerticalLine from './components/VerticalLine';
import './style/main.css';

interface Props extends PanelProps<PanelOptions> {}
interface State {}

export class MainPanel extends PureComponent<Props, State> {
  state: State = {};

  componentDidMount() {}

  componentDidUpdate(prevProps: Props) {
    if (prevProps.data.series !== this.props.data.series) {
    }
  }

  render() {
    const { width, height } = this.props;

    return (
      <div className="main-container" style={{ width, height, overflowY: 'auto' }}>
        <VerticalLine />
      </div>
    );
  }
}
