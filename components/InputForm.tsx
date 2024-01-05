'use client';

import { useEffect, useState } from 'react';
import CountryInput from './CountryInput';
import FromInput from './FromInput';
import IndicatorInput from './IndicatorInput';
import ToInput from './ToInput';
import { Button } from './ui/button';
import { getIndicatorCodeByName } from '@/lib/utils';

interface InputFormProps {
  closePopover: () => void;
  submitRequest: () => void;
  updateInputs: (key: string, value: string | number) => void;
}

function InputForm({
  closePopover,
  submitRequest,
  updateInputs,
}: InputFormProps) {
  function submit() {
    submitRequest();
    closePopover();
  }

  return (
    <div className='flex flex-col rounded-lg bg-muted gap-y-4 md:grid md:grid-cols-2 md:grid-rows-2 md:mb-3 md:mx-3 md:py-0 md:mb-0 md:gap-x-3 lg:flex lg:flex-row lg:justify-between lg:p-0 lg:mb-0'>
      <CountryInput updateInputs={updateInputs} />
      <IndicatorInput updateInputs={updateInputs} />
      <FromInput updateInputs={updateInputs} />
      <ToInput updateInputs={updateInputs} />
      <Button
        onClick={submit}
        className='flex justify-center items-center my-auto col-start-1 col-end-3 lg:col-start-5 lg:col-end-6'
      >
        GO
      </Button>
    </div>
  );
}

export default InputForm;
