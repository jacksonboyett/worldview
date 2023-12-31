import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { yearsArr } from '@/constants';

interface ToInputProps {
  updateToYear: (toYear: number) => void;
}

function ToInput({ updateToYear }: ToInputProps) {
  return (
    <div className='bg-white py-1 rounded'>
      <Select onValueChange={(value) => updateToYear(+value)}>
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
