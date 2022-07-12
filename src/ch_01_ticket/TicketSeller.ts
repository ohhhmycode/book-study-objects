import TicketOffice from "./TIcketOffice";

class TicketSeller {
    private _ticketOffice: TicketOffice;

    constructor (ticketOffice: TicketOffice) {
        this._ticketOffice = ticketOffice;
    }

    get ticketOffice(): TicketOffice {
        return this._ticketOffice;
    }
}

export default TicketSeller;