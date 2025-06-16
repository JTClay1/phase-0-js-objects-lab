const attendees = [
  {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
  },
  {
    attendeeId: "T002",
    name: "Bob Johnson",
    event: "JavaScript Conference",
    ticketType: "Standard",
    ticketPrice: 100.00
  },
  {
    attendeeId: "T003",
    name: "Charlie Davis",
    event: "JavaScript Conference",
    ticketType: "Student",
    ticketPrice: 50.00
  }
];
function logAttendeeName(attendee) {
  console.log(attendee.name);
}
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}
logTicketPrice(attendees[0]);
attendees.forEach(function(attendee) {
  logAttendeeName(attendee);
});
function calculateTotalRevenue(attendees) {
  let total = 0;

  attendees.forEach(function(attendee) {
    total += attendee.ticketPrice;
  });

  return total;
}
console.log("Total Revenue: $" + calculateTotalRevenue(attendees));






//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};