import getLanguageCount from "../../utils/getLanguageCount";
import "./DaysCounter.scss";
import moment from "moment";

interface IProps {
	water: string;
	fertilizer: string;
	transplant: string;
}

const DaysCounter = ({ water, fertilizer, transplant }: IProps) => {
	const lastWater = moment(water, "DD/MM/YYYY").fromNow();
	const lastFertilizer = moment(fertilizer, "DD/MM/YYYY").fromNow();
	const lastTransplant = moment(transplant, "DD/MM/YYYY").fromNow();

	return (
		<div className="counter">
			<div className="counter__title">Útim:</div>
			<div className="counter__row">
				<div className="counter__subtitle">Rec</div>
				<div className="counter__subtitle">Fertilitzant</div>
				<div className="counter__subtitle">Transplant</div>
			</div>
			<div className="counter__row">
				<div className="counter__number">{getLanguageCount(lastWater)}</div>
				<div className="counter__number">{getLanguageCount(lastFertilizer)}</div>
				<div className="counter__number">{getLanguageCount(lastTransplant)}</div>
			</div>
		</div>
	);
};

export default DaysCounter;
