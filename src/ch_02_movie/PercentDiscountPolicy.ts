import DiscountCondition from "./DiscountCondition";
import DiscountPolicy from "./DiscountPolicy";
import Money from "./Money";
import Screening from "./Screening";

class PercentDiscountPolicy extends DiscountPolicy {

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