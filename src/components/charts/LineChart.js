import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';


const data = [
  { argument: 0, value: 2 },
  { argument: 1, value: 10 },
  { argument: 2, value: 6 },
  { argument: 3, value: 6 },
  { argument: 4, value: 7 },
  { argument: 5, value: 5 },
  { argument: 6, value: 3 },
];

export default () => (
  <Paper>
    <Chart
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />
          <LineSeries valueField="value" argumentField="argument" />
    </Chart>
  </Paper>
);
