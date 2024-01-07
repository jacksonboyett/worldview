'use client';

import { Line } from 'react-chartjs-2';
import { registerables, Chart as ChartJs } from 'chart.js';
import { ChartInputs } from '@/types/Types';

ChartJs.register(...registerables);

interface ChartProps {
  data: ChartInputs;
}

function Chart({ data }: ChartProps) {
  if (!data) return null;

  console.log(data)

  return (
    <Line
      options={{
        plugins: {
          legend: {
            labels: {
              color: 'white',
            },
          },
        },
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              color: 'white',
            },
          },
          x: {
            ticks: {
              color: 'white',
            },
          },
        },
      }}
      className='h-full'
      datasetIdKey='id'
      data={{
        labels: data.labels,
        datasets: [
          {
            label: data.label,
            data: data.data,
          },
        ],
      }}
    />
  );
}

export default Chart;
