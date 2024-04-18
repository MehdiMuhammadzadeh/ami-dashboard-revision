import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { COLORS } from '../styles/colors';

// Initialize Highcharts modules
// require('highcharts/modules/exporting')(Highcharts);

const Highchart = () => {
  const options = {
    chart: {
      type: 'pie',
      // backgroundColor: `${COLORS.darkCard}`,
      backgroundColor:'#27283f',
      borderRadius: 20,
    },
    title: {
      text: 'Mood Pie',
      style: {
        color: `${COLORS.white}`,
      },
    },
    series: [{
      name: 'Categories',
      innerSize: '50%', // Set innerSize to create a donut chart
      data: [
        { name: 'Category 1', y: 400 },
        { name: 'Category 2', y: 300 },
        { name: 'Category 3', y: 300 },
        { name: 'Category 4', y: 200 },
      ],
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
