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
  updateCountry: (country: string) => void;
}

function CountryInput({ updateCountry }: CountryInputProps) {
  return (
    <div className='bg-white py-1 rounded flex-1'>
      <Select onValueChange={(value) => updateCountry(value)}>
        <SelectTrigger>
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
