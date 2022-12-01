import { Day } from "./dayInterface";

export interface Space {
	id: string;
	name: string;
	days?: Day[];
}
