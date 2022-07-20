import Screening from "./Screening";

interface DiscountPolicy {

    isSatisfied(screening: Screening): boolean;

}

export default DiscountPolicy;