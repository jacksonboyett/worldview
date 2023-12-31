'use client';

import DataBar from '@/components/DataBar';
import { Line } from 'react-chartjs-2';
import { registerables, Chart } from 'chart.js';
import { useState } from 'react';

Chart.register(...registerables);

function Visualizer() {
  const [data, setData] = useState();

  function updateData(data: any) {
    setData(data)
    console.log(data)
  }

  return (
    <div role='Visualizer' className='flex-1 flex flex-col items-stretch'>
      <div className='mx-4 h-[80vh]'>
        <Line
          options={{ maintainAspectRatio: false }}
          className='h-full'
          datasetIdKey='id'
          data={{
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
              {
                label: 'GDP',
                data: [2400000, 2500000, 2600000],
              },
            ],
          }}
        />
      </div>
      <div className='mt-auto mx-auto'>
        <DataBar updateData={updateData}/>
      </div>
    </div>
  );
}

export default Visualizer;
