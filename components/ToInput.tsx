import { SelectTrigger } from "@radix-ui/react-select";
import { Select, SelectContent, SelectItem, SelectValue } from "./ui/select";
import { yearsArr } from "@/constants";

function ToInput() {
	return ( 
		<div className="bg-white px-3 py-1 rounded">
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="To"/>
				</SelectTrigger>
				<SelectContent className="bg-muted">
					{yearsArr.map((year) => (
						<SelectItem value={year.toString()} key={year}>{year}</SelectItem>
 					))}
				</SelectContent>
			</Select>
		</div>
	 );
}

export default ToInput;