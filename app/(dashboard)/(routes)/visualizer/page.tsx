'use client';

import DataBar from '@/components/DataBar';
import MobileDataBar from '@/components/MobileDataBar';

function Visualizer() {
  return (
    <div role='Visualizer' className='flex flex-col flex-1 items-stretch'>
      <div>Chart</div>
      <div className='hidden md:block mt-auto'>
        <DataBar />
      </div>
			<div className='block md:hidden mt-auto mx-auto'>
				<MobileDataBar/>
			</div>
    </div>
  );
}

export default Visualizer;
