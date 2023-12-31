'use client';

import { useEffect, useState } from 'react';
import DataForm from './DataForm';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface Inputs {
  country: string;
  indicator: string;
  fromYear: number;
  toYear: number;
}

function DataBar() {
  const [country, setCountry] = useState<string>('');
  const [indicator, setIndicator] = useState<string>('');
  const [fromYear, setFromYear] = useState<number>(0);
  const [toYear, setToYear] = useState<number>(0);
  const [inputs, setInputs] = useState<Inputs>({
    country: '',
    indicator: '',
    fromYear: 0,
    toYear: 0,
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

  function submitRequest(){
    console.log(inputs)
  }

  return (
    <div>
      <Popover open={popoverOpen}>
        <PopoverTrigger
          onClick={() => setPopoverOpen(!popoverOpen)}
          className='bg-secondary font-semibold w-24 h-8 rounded-md mb-6'
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
