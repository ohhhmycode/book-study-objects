import DiscountPolicy from "./DiscountPolicy";
import Money from "./Money";
import Screening from "./Screening";

class Movie {

    private _title: String;
    private _runningTime: number;
    private _fee: Money;
    private _discountPolicy: DiscountPolicy;

    constructor(title: String, runningTime: number, fee: Money, discountPolicy: DiscountPolicy) {
        this._title = title;
        this._runningTime = runningTime;
        this._fee = fee;
        this._discountPolicy = discountPolicy;
    }

    get fee(): Money {
        return this._fee;
    }

    calculateMovieFee(screening: Screening): Money {
        return this.fee.minus(this._discountPolicy.calculateDiscountAmount(screening));
    }

}

export default Movie;