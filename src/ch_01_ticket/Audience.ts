import Bag from "./Bag";

class Audience {
    private _bag: Bag;

    constructor(bag: Bag) {
        this._bag = bag;
    }

    get bag() {
        return this._bag;
    }
}

export default Audience;