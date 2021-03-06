import DefaultDiscountPolicy from "./DefaultDiscountPolicy";
import DiscountCondition from "./DiscountCondition";
import Money from "./Money";
import Screening from "./Screening";

class PercentDiscountPolicy extends DefaultDiscountPolicy {

    private _percent: number;

    constructor (percent: number, conditions: DiscountCondition[]) {
        super(conditions);
        this._percent = percent;
    }

    getDiscountAmount(screening: Screening): Money {
        return screening.getMovieFee().times(this._percent);
    }

}

export default PercentDiscountPolicy;