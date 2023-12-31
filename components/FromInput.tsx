import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { yearsArr } from '@/constants';

interface FromInputProps {
  updateFromYear: (fromYear: number) => void;
}

function FromInput({ updateFromYear }: FromInputProps) {
  return (
    <div className='bg-white py-1 rounded'>
      <Select onValueChange={(value) => updateFromYear(+value)}>
        <SelectTrigger>
          <SelectValue placeholder='From' />
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

export default FromInput;
