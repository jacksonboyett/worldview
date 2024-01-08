'use client';

import { useState } from 'react';
import InputForm from './InputForm';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface InputButtonProps {
  updateData: () => void;
  updateInputs: (key: string, value: string | number) => void;
}

function InputButton({ updateData, updateInputs }: InputButtonProps) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  function closePopover() {
    setPopoverOpen(false);
  }

  function onSubmit() {
    setPopoverOpen(false);
  }

  async function submitRequest() {
    updateData()
  }

  return (
    <div className='fixed bottom-4'>
      <Popover open={popoverOpen}>
        <PopoverTrigger
          onClick={() => setPopoverOpen(!popoverOpen)}
          className='bg-muted font-semibold w-24 h-8 rounded-md active:bg-muted/70'
        >
          Inputs
        </PopoverTrigger>
        <PopoverContent
          onCloseAutoFocus={() => onSubmit()}
          className='bg-muted w-80 px-3 md:w-[60vw] md:px-0 lg:w-[70vw] mb-6'
        >
          <InputForm
            updateInputs={updateInputs}
            closePopover={closePopover}
            submitRequest={submitRequest}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default InputButton;
