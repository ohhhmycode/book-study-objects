import DiscountPolicy from "./DiscountPolicy";
import Money from "./Money";
import Screening from "./Screening";

class NoneDiscountPolicy implements DiscountPolicy {

    calculateDiscountAmount(screening: Screening): Money {
        return Money.ZERO;
    }

}

export default NoneDiscountPolicy;