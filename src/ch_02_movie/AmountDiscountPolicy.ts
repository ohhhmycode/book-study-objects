import DefaultDiscountPolicy from "./DefaultDiscountPolicy";
import DiscountCondition from "./DiscountCondition";
import Money from "./Money";
import Screening from "./Screening";

class AmountDiscountPolicy extends DefaultDiscountPolicy {

    private _discountAmount: Money;

    constructor (discountAmount: Money, conditions: DiscountCondition[]) {
        super(conditions);
        this._discountAmount = discountAmount;
    }

    getDiscountAmount(screening: Screening): Money {
        return this._discountAmount;
    }

}

export default AmountDiscountPolicy;