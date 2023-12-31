'use client';

import DataBar from '@/components/DataBar';

function Visualizer() {
  return (
    <div role='Visualizer' className='flex flex-col flex-1 items-stretch'>
      <div>Chart</div>
      <div className='mt-auto mx-auto'>
        <DataBar />
      </div>
    </div>
  );
}

export default Visualizer;
