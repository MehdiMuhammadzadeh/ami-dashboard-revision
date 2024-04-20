import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { COLORS } from '../styles/colors';

// Initialize Highcharts modules
// require('highcharts/modules/exporting')(Highcharts);

const Highchart = ({data}) => {
  const options = {
    chart: {
      type: 'pie',
      // backgroundColor: `${COLORS.darkCard}`,
      backgroundColor:'#27283f',
      borderRadius: 20,
    },
    title: {
      text: 'Activity Pie',
      style: {
        color: `${COLORS.white}`,
      },
    },
    series: [{
      name: 'Categories',
      innerSize: '50%',
      data:data,
    }],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y}',
        },
      },
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default Highchart;
