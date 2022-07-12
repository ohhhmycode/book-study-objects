import Audience from "./Audience";
import TicketSeller from "./TicketSeller";

class Theater {
    private _ticketSeller: TicketSeller;

    constructor (ticketSeller: TicketSeller) {
        this._ticketSeller = ticketSeller;
    }

    enter(audience: Audience): void {
        if (audience.bag.hasInvitation()) {
            const ticket = this._ticketSeller.ticketOffice.getTicket();
            if (ticket !== undefined) {
                audience.bag.ticket = ticket;
            }
        }
        else {
            const ticket = this._ticketSeller.ticketOffice.getTicket();
            if (ticket !== undefined) {
                audience.bag.minusAmount(ticket.fee);
                this._ticketSeller.ticketOffice.plusAmount(ticket.fee);
                audience.bag.ticket = ticket;
            }
        }
    }
}

export default Theater;