import { SelectTrigger } from "@radix-ui/react-select";
import { Select, SelectContent, SelectItem, SelectValue } from "./ui/select";
import { indicatorsArr } from "@/constants";

function IndicatorInput() {
	return ( 
		<div className="bg-white px-3 py-1 rounded">
		<Select>
			<SelectTrigger>
				<SelectValue placeholder="Indicator"/>
			</SelectTrigger>
			<SelectContent className="bg-muted">
				{indicatorsArr.map((indicator) => (
					<SelectItem value={indicator} key={indicator}>{indicator}</SelectItem>
				 ))}
			</SelectContent>
		</Select>
	</div>
	 );
}

export default IndicatorInput;