import CountryInput from './CountryInput';
import FromInput from './FromInput';
import IndicatorInput from './IndicatorInput';
import ToInput from './ToInput';

function DataForm() {
  return (
    <div className='flex flex-col bg-muted gap-y-4 px-3 md:grid md:grid-cols-2 md:grid-rows-2 md:mb-3 md:mx-3 md:py-4 md:gap-x-3 lg:grid-rows-1 lg:grid-cols-4 rounded-lg'>
      <CountryInput />
      <IndicatorInput/>
      <FromInput/>
      <ToInput/>
    </div>
  );
}

export default DataForm;
