import Customer from "./Customer";
import Money from "./Money";
import Movie from "./Movie";
import Reservation from "./Reservation";

class Screening {

    private _movie: Movie;
    private _sequence: number;
    private _whenScreened: Date;

    constructor (movie: Movie, sequence: number, whenScreened: Date) {
        this._movie = movie;
        this._sequence = sequence;
        this._whenScreened = whenScreened;
    }

    get movie(): Movie {
        return this._movie;
    }

    get sequence(): number {
        return this._sequence;
    }

    get whenScreened(): Date {
        return this._whenScreened;
    }

    public reserve(customer: Customer, audienceCount: number): Reservation {
        return new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
    }

    public isSequence(sequence: number) {
        return this._sequence === sequence;
    }

    private calculateFee(audienceCount: number): Money {
        return this._movie.calculateMovieFee(this).times(audienceCount);
    }


}

export default Screening;

