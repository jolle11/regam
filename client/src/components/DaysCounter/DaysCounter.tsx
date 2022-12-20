import "./DaysCounter.scss";
import moment from "moment";
interface IProps {
	water: string;
	fertilizer: string;
	transplant: string;
}

const DaysCounter = ({ water, fertilizer, transplant }: IProps) => {
	return (
		<div className="counter">
			<div className="counter__title">Dies des de l'útim:</div>
			<div className="counter__subtitle counter__subtitle--rec">Rec</div>
			<div className="counter__subtitle counter__subtitle--fertilitzant">Fertilitzant</div>
			<div className="counter__subtitle counter__subtitle--transplant">Transplant</div>
			<div className="counter__number counter__number--rec">
				{moment(water, "DD/MM/YYYY").fromNow()}
			</div>
			<div className="counter__number counter__number--fertilitzant">
				{moment(fertilizer, "DD/MM/YYYY").fromNow()}
			</div>
			<div className="counter__number counter__number--transplant">
				{moment(transplant, "DD/MM/YYYY").fromNow()}
			</div>
		</div>
	);
};

export default DaysCounter;
