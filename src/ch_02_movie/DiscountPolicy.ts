import Money from "./Money";
import Screening from "./Screening";

interface DiscountPolicy {
    calculateDiscountAmount(screening: Screening): Money
}

export default DiscountPolicy;