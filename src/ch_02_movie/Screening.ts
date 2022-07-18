import Movie from "./Movie";

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

}

export default Screening;