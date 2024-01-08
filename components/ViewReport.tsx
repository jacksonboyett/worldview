import Report from "./Report";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

function ViewReport({ report }: any) {
	return ( 
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
	 );
}

export default ViewReport;