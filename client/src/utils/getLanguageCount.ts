const getPositionElement = (string: string, position: number) => {
	return string.split(" ").at(position);
};

const getLanguageCount = (date: string) => {
	switch (getPositionElement(date, 1)) {
		default:
			if (date === "Invalid date") {
				return "Hi ha hagut algún problema";
			}
			return `Fa ${getPositionElement(date, 0)} dies`;
		case "hours":
			return `Fa ${getPositionElement(date, 0)} hores`;
		case "month":
			return "Fa 1 mes";
		case "months":
			return `Fa ${getPositionElement(date, 0)} mesos`;
		case "year":
			return "Fa 1 any";
		case "years":
			return `Fa ${getPositionElement(date, 0)} anys`;
	}
};

export default getLanguageCount;
