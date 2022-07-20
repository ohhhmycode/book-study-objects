import DiscountCondition from "./DiscountCondition";
import Money from "./Money";
import Screening from "./Screening";

abstract class DiscountPolicy {
    private _conditions: DiscountCondition[];

    constructor (conditions: DiscountCondition[]) {
        this._conditions = conditions;
    }

    public calculateDiscountAmount(screening: Screening): Money {
        for (const condition of this._conditions) {
            if (condition.isSatisfied(screening)) {
                return this.getDiscountAmount(screening);
            }
        }

        return Money.ZERO;
    }

    abstract getDiscountAmount(screening: Screening): Money;
}

export default DiscountPolicy;