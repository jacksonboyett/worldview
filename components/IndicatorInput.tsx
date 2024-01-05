import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { indicatorsArr } from '@/constants';

interface IndicatorInputProps {
  updateInputs: (key: string, value: string | number) => void;
}

function IndicatorInput({ updateInputs }: IndicatorInputProps) {
  return (
    <div className='bg-white py-1 rounded flex-1'>
      <Select onValueChange={(value) => updateInputs('indicator', value)}>
        <SelectTrigger>
          <SelectValue placeholder='Indicator' />
        </SelectTrigger>
        <SelectContent className='bg-muted'>
          {indicatorsArr.map((indicator) => (
            <SelectItem value={indicator} key={indicator}>
              {indicator}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default IndicatorInput;
