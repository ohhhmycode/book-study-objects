import Screening from "./Screening";

interface DiscountCondition {

    isSatisfied(screening: Screening): boolean;

}

export default DiscountCondition;