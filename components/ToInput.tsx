import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { yearsArr } from '@/constants';

interface ToInputProps {
  updateInputs: (key: string, value: string | number) => void;
}

function ToInput({ updateInputs }: ToInputProps) {
  return (
    <div className='bg-white py-1 rounded'>
      <Select onValueChange={(value) => updateInputs('toYear', +value)}>
        <SelectTrigger>
          <SelectValue placeholder='To' />
        </SelectTrigger>
        <SelectContent className='bg-muted'>
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

export default ToInput;
