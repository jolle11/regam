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
			<div className="counter__subtitle counter__subtitle--rec">Rec</div>
			<div className="counter__subtitle counter__subtitle--fertilitzant">Fertilitzant</div>
			<div className="counter__subtitle counter__subtitle--transplant">Transplant</div>
			<div className="counter__number counter__number--rec">{getLanguageCount(lastWater)}</div>
			<div className="counter__number counter__number--fertilitzant">
				{getLanguageCount(lastFertilizer)}
			</div>
			<div className="counter__number counter__number--transplant">
				{getLanguageCount(lastTransplant)}
			</div>
		</div>
	);
};

export default DaysCounter;
