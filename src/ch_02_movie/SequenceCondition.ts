import DiscountCondition from "./DiscountCondition";
import Screening from "./Screening";

class SequenceCondition implements DiscountCondition {

    private _sequence: number;

    constructor (sequence: number) {
        this._sequence = sequence;
    }

    isSatisfied(screening: Screening): boolean {
        return screening.isSequence(this._sequence);
    }

}

export default SequenceCondition;
