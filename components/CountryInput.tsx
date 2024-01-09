'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { countriesArr } from '@/constants';

interface CountryInputProps {
  updateInputs: (key: string, value: string | number) => void;
}

function CountryInput({ updateInputs }: CountryInputProps) {
  return (
    <div className='bg-white py-1 rounded flex-1'>
      <Select onValueChange={(value) => updateInputs('country', value)}>
        <SelectTrigger className='active:border-2 active:border-black'>
          <SelectValue placeholder='Country' />
        </SelectTrigger>
        <SelectContent className='bg-muted'>
          {countriesArr.map((country) => (
            <SelectItem
              className='overflow-hidden flex'
              value={country}
              key={country}
            >
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CountryInput;
