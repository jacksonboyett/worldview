'use client';

import { Report as ReportType } from '@/types/Types';
import Report from './Report';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Globe, Loader, Loader2, Loader2Icon, Star } from 'lucide-react';

interface ReportButtonProps {
  report: Report | undefined;
  generateReport: () => void;
  isLoading: boolean;
}

function ReportButton({
  generateReport,
  report,
  isLoading,
}: ReportButtonProps) {
  let button;
  if (isLoading) {
    button = <Loader />;
  } else {
    button = null;
  }

  return report ? (
    <Dialog>
      <DialogTrigger>
        <div className="bg-primary text-white ring-1 ring-blue-100 font-semibold rounded flex justify-center items-center text-center fixed left-4 md:left-80 bottom-4 w-20 py-1 sm:mb-4 sm:bottom-0 sm:py-0 sm:h-12 sm:w-32 cursor-pointer active:bg-muted/70">
          View Report
        </div>
      </DialogTrigger>
      <DialogContent className='rounded-lg w-10/12 sm:w-9/12 md:w-7/12 lg:w-6/12 max-w-xl h-[95vh]'>
        <DialogHeader>
          <DialogTitle>AI Generated Report</DialogTitle>
          <DialogDescription>
            <Report report={report} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ) : (
    <button
      disabled={isLoading}
      onClick={() => generateReport()}
      className="bg-primary text-white font-semibold rounded-lg flex justify-center items-center text-center fixed left-0 sm:left-4 md:left-80 bottom-4 py-1 sm:mb-4 sm:bottom-0 h-14 w-24 cursor-pointer active:bg-muted/70">
      {isLoading ? (
        <div className='flex h-full w-full justify-center items-center active:bg-muted'>
          <Loader className="animate-[spin_3s_linear_infinite] mr-1" />
          Loading
        </div>
      ) : (
        'Generate Report'
      )}
    </button>
  );
}

export default ReportButton;
