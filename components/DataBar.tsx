'use client';

import { useEffect, useState } from 'react';
import DataForm from './DataForm';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import axios from 'axios';

interface Inputs {
  country: string;
  indicator: string;
  fromYear: number;
  toYear: number;
}

interface DataBarProps {
  updateData: (data: any) => void;
}

function DataBar({ updateData }: DataBarProps) {
  const [country, setCountry] = useState<string>('');
  const [indicator, setIndicator] = useState<string>('');
  const [fromYear, setFromYear] = useState<number>(0);
  const [toYear, setToYear] = useState<number>(0);
  const [inputs, setInputs] = useState<Inputs>({
    country: 'Peru',
    indicator: 'Inflation',
    fromYear: 2010,
    toYear: 2020,
  });
  const [popoverOpen, setPopoverOpen] = useState(false);

  function updateCountry(countryName: string) {
    setInputs((prevState) => {
      return {
        ...prevState,
        country: countryName,
      };
    });
  }

  function updateIndicator(indicatorName: string) {
    setInputs((prevState) => {
      return {
        ...prevState,
        indicator: indicatorName,
      };
    });
  }

  function updateFromYear(fromYear: number) {
    setInputs((prevState) => {
      return {
        ...prevState,
        fromYear: fromYear,
      };
    });
  }

  function updateToYear(toYear: number) {
    setInputs((prevState) => {
      return {
        ...prevState,
        toYear: toYear,
      };
    });
  }

  function closePopover() {
    setPopoverOpen(false);
  }

  function onSubmit() {
    setPopoverOpen(false);
    console.log('SUBMITTED');
  }

  async function submitRequest() {
    const response = await axios.post('/api/visualizer', {
      inputs: inputs,
    });
    updateData(response)
  }

  return (
    <div className='pb-4'>
      <Popover open={popoverOpen}>
        <PopoverTrigger
          onClick={() => setPopoverOpen(!popoverOpen)}
          className='bg-muted font-semibold w-24 h-8 rounded-md'
        >
          Inputs
        </PopoverTrigger>
        <PopoverContent
          onCloseAutoFocus={() => onSubmit()}
          className='bg-muted w-80 px-3 md:w-[60vw] md:px-0 lg:w-[70vw]'
        >
          <DataForm
            updateCountry={updateCountry}
            updateIndicator={updateIndicator}
            updateFromYear={updateFromYear}
            updateToYear={updateToYear}
            closePopover={closePopover}
            submitRequest={submitRequest}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DataBar;
