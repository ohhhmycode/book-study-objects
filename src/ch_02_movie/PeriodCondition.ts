import DiscountCondition from "./DiscountCondition";
import Screening from "./Screening";

class PeriodCondition implements DiscountCondition {

    private _dayOfWeek: number;
    private _startTime: Date;
    private _endTime: Date;

    constructor (dayOfWeek: number, startTime: Date, endTime: Date) {
        this._dayOfWeek = dayOfWeek;
        this._startTime = startTime;
        this._endTime = endTime;
    }
    
    isSatisfied(screening: Screening): boolean {
        return screening.whenScreened.getDay() === this._dayOfWeek &&
        screening.whenScreened >= this._startTime &&
        screening.whenScreened <= this._endTime;
    }

}

export default PeriodCondition;
