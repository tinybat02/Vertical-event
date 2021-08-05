import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { PanelOptions, Frame, ItemData } from 'types';
import { processData } from './util/process';
import VerticalLine from './components/VerticalLine';
import './style/main.css';

interface Props extends PanelProps<PanelOptions> {}
interface State {
  data: ItemData[];
}

export class MainPanel extends PureComponent<Props, State> {
  state: State = {
    data: [],
  };

  componentDidMount() {
    const series = this.props.data.series as Frame[];

    if (series.length == 0) return;

    const { data } = processData(series, this.props.options.order);

    this.setState({ data });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.data.series !== this.props.data.series) {
      const series = this.props.data.series as Frame[];
      if (series.length == 0) {
        this.setState({ data: [] });
        return;
      }

      const { data } = processData(series, this.props.options.order);

      this.setState({ data });
    }
  }

  render() {
    const { width, height } = this.props;
    const { data } = this.state;

    if (!data.length) return <div>No Data</div>;
    return (
      <div className="main-container" style={{ width, height, overflowY: 'auto' }}>
        <VerticalLine eventData={data} />
      </div>
    );
  }
}
