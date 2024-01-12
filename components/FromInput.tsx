import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { yearsArr } from '@/constants';

interface FromInputProps {
  updateInputs: (key: string, value: string | number) => void;
}

function FromInput({ updateInputs }: FromInputProps) {
  return (
    <div className='bg-white py-1 rounded'>
      <Select onValueChange={(value) => updateInputs('fromYear', +value)}>
        <SelectTrigger>
          <SelectValue placeholder='From' />
        </SelectTrigger>
        <SelectContent className='bg-muted h-64'>
          {yearsArr.map((year) => (
            <SelectItem value={year.toString()} key={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default FromInput;
