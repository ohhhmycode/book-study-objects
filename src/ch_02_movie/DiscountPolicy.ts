import Money from "./Money";
import Screening from "./Screening";

abstract class DiscountPolicy {
    abstract calculateDiscountAmount(screening: Screening): Money;
}

export default DiscountPolicy;