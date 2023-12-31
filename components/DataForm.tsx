'use client';

import { useEffect, useState } from 'react';
import CountryInput from './CountryInput';
import FromInput from './FromInput';
import IndicatorInput from './IndicatorInput';
import ToInput from './ToInput';
import { Button } from './ui/button';
import { getIndicatorCodeByName } from '@/lib/utils';

interface Inputs {
  country: string;
  indicator: string;
  fromYear: number;
  toYear: number;
}

interface DataFormProps {
  closePopover: () => void;
  updateCountry: (country: string) => void;
  updateIndicator: (indicator: string) => void;
  updateFromYear: (fromYear: number) => void;
  updateToYear: (toYear: number) => void;
  submitRequest: () => void;
}

function DataForm({
  closePopover,
  updateCountry,
  updateIndicator,
  updateFromYear,
  updateToYear,
  submitRequest
}: DataFormProps) {

  function submit() {
    submitRequest();
    closePopover();
  }

  return (
    <div className='flex flex-col rounded-lg bg-muted gap-y-4 md:grid md:grid-cols-2 md:grid-rows-2 md:mb-3 md:mx-3 md:py-0 md:mb-0 md:gap-x-3 lg:flex lg:flex-row lg:justify-between lg:p-0 lg:mb-0'>
      <CountryInput updateCountry={updateCountry} />
      <IndicatorInput updateIndicator={updateIndicator} />
      <FromInput updateFromYear={updateFromYear} />
      <ToInput updateToYear={updateToYear} />
      <Button
        onClick={submit}
        className='flex justify-center items-center my-auto col-start-1 col-end-3 lg:col-start-5 lg:col-end-6'
      >
        GO
      </Button>
    </div>
  );
}

export default DataForm;
