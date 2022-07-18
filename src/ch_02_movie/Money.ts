class Money {
    static readonly ZERO: Money = Money.wons(0);

    readonly _amount: number;

    constructor(amount: number) {
        this._amount = amount;
    }

    static wons(amount: number): Money {
        return new Money(amount);
    }

    plus(amount: Money): Money {
        return new Money(this._amount + amount._amount);
    }

    minus(amount: Money): Money {
        return new Money(this._amount - amount._amount);
    }

    times(percent: number): Money {
        return new Money(this._amount * percent);
    }

    isLessThan(other: Money): boolean {
        return this._amount < other._amount;
    }

    isGreaterThanOrEqual(other: Money): boolean {
        return this._amount >= other._amount;
    }
}

export default Money;