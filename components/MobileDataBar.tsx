import DataForm from './DataForm';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

function MobileDataBar() {

  function onSubmit() {
    console.log("SUBMITTED")
  }
  return (
    <div>
      <Popover>
        <PopoverTrigger className='bg-secondary font-semibold w-24 h-8 rounded-md mb-6'>Inputs</PopoverTrigger>
        <PopoverContent onCloseAutoFocus={() => onSubmit()} className='bg-muted'>
					<DataForm/>
				</PopoverContent>
      </Popover>
    </div>
  );
}

export default MobileDataBar;
