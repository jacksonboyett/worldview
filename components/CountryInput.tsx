import { SelectTrigger } from "@radix-ui/react-select";
import { Select, SelectContent, SelectItem, SelectValue } from "./ui/select";
import { countriesArr } from "@/constants";

function CountryInput() {
	return ( 
		<div className="bg-white px-3 py-1 rounded">
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="Country"/>
				</SelectTrigger>
				<SelectContent className="bg-muted">
					{countriesArr.map((country) => (
						<SelectItem value={country} key={country}>{country}</SelectItem>
 					))}
				</SelectContent>
			</Select>
		</div>
	 );
}

export default CountryInput;