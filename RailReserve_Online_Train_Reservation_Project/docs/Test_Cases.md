# Test Cases — RailReserve

| ID | Test | Steps | Expected result |
|---|---|---|---|
| TC01 | Open home page | Open `index.html` | Responsive home page loads |
| TC02 | Search train | Enter origin, destination and date | Train results are filtered by route |
| TC03 | No matching route | Enter a route not in sample data | No-results message appears |
| TC04 | Register passenger | Fill valid registration details | Account is saved in this browser and dashboard opens |
| TC05 | Duplicate email | Register using an existing email | Duplicate account warning appears |
| TC06 | Valid login | Use demo passenger credentials | Passenger is signed in |
| TC07 | Invalid login | Use incorrect credentials | Error alert appears |
| TC08 | Book ticket | Sign in, choose a train, enter valid passenger details | Demo ticket and 10-digit PNR are generated |
| TC09 | Seat availability | Choose a class with zero sample seats | Booking is prevented with a warning |
| TC10 | PNR lookup | Enter PNR from a created booking | Ticket status and route details appear |
| TC11 | Unknown PNR | Enter a PNR not stored in browser | No booking found message appears |
| TC12 | Print ticket | Open dashboard and click Print ticket | Browser print dialog opens |
| TC13 | Cancel ticket | Click Cancel and confirm | Booking is marked cancelled and estimated refund appears |
| TC14 | Admin adds train | Complete Add schedule form | New sample schedule appears in the list |
| TC15 | Export report | Click Export CSV | Reservations CSV file is downloaded |
| TC16 | Responsive UI | Resize browser to mobile width | Navigation, cards and forms adapt to narrow screen |

## Notes
Use the seeded demo credentials in README.md. Data is browser-local; different browsers/devices do not share bookings. Do not enter real payment information.
