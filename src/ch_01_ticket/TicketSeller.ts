import Audience from "./Audience";
import TicketOffice from "./TicketOffice";

class TicketSeller {
    private _ticketOffice: TicketOffice;

    constructor (ticketOffice: TicketOffice) {
        this._ticketOffice = ticketOffice;
    }

    sellTo(audience: Audience): void {
        if (audience.bag.hasInvitation()) {
            const ticket = this._ticketOffice.getTicket();
            if (ticket !== undefined) {
                audience.bag.ticket = ticket;
            }
        }
        else {
            const ticket = this._ticketOffice.getTicket();
            if (ticket !== undefined) {
                audience.bag.minusAmount(ticket.fee);
                this._ticketOffice.plusAmount(ticket.fee);
                audience.bag.ticket = ticket;
            }
        }
    }
}

export default TicketSeller;