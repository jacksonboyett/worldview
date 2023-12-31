'use client';

import DataBar from '@/components/DataBar';
import { useState } from 'react';
import Chart from '@/components/Chart';
import { formatData } from '@/lib/utils';
import { WorldBankApiResponse } from '@/types/Types';
import { ChartInputs } from '@/types/Types';

function Visualizer() {
  const [data, setData] = useState<ChartInputs>();

  function updateData(responseData: WorldBankApiResponse) {
    let formattedData = formatData(responseData);
    setData(formattedData);
  }

  return (
    <div role='Visualizer' className='flex-1 flex flex-col items-stretch'>
      <div className='mx-4 h-[80vh]'>{data ? <Chart data={data} /> : null}</div>
      <div className='mt-auto mx-auto'>
        <DataBar updateData={updateData} />
      </div>
    </div>
  );
}

export default Visualizer;
