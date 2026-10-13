# BusEase — Online Bus Ticket Booking System

## Aim
To develop a responsive bus ticket booking website prototype using HTML, CSS and JavaScript for the Internet Programming lab.

## Objectives
- Search buses by origin, destination and travel date.
- Display schedules, categories, fares and sample seat availability.
- Demonstrate registration, login and passenger profile management.
- Select seats and enter passenger information.
- View booking history and cancel tickets.
- Let admins maintain bus information, categories, schedules, registered users, news and comments.
- Generate a booking report in CSV format.

## Technology
HTML5 structures pages and forms; CSS3 provides responsive layouts; JavaScript implements validation and interactions; localStorage provides browser-local persistence.

## Modules
1. **Login and Registration:** demo account creation and login, change-password and forgot-password guidance.
2. **Bus Search:** search by route and travel date, display schedules and categories.
3. **Ticket Booking:** select available seats, enter passenger names/ages, choose a payment placeholder, and generate booking reference.
4. **User Dashboard:** update profile, view ticket history and cancel demo tickets.
5. **Admin:** add/update bus schedule data, change categories/fare/capacity/departure, manage booking records, view users.
6. **Comments and News:** post route-specific comments, moderate comments, publish/delete travel news.
7. **Reports:** export a CSV report of booking data and passenger totals.

## Test cases
| ID | Test | Expected result |
|---|---|---|
| TC01 | Open website on desktop/mobile | Responsive layout |
| TC02 | Register a new email | Demo account created |
| TC03 | Register duplicate email | Error message |
| TC04 | Login with invalid credentials | Error message |
| TC05 | Search route Chennai to Bengaluru | Matching sample buses shown |
| TC06 | Select bus and seats | Selected seats highlighted |
| TC07 | Select an already booked seat | Seat shown unavailable |
| TC08 | Confirm booking with passenger details | Reference saved to dashboard |
| TC09 | Cancel a booking | Status changes to Cancelled |
| TC10 | Admin changes bus fare/category | Updated value saved in browser |
| TC11 | Admin adds a bus | New bus appears in schedule list |
| TC12 | Admin edits/cancels a booking | Updated status/date shown |
| TC13 | Post a route comment | Comment appears on comments page |
| TC14 | Admin publishes news | News appears on Travel News page |
| TC15 | Export report | CSV file downloads |
| TC16 | Submit contact form | Demo confirmation displayed |

## Conclusion
BusEase demonstrates the core client-side workflow of a bus ticket booking system for an IP lab. The prototype illustrates responsive design, forms, DOM manipulation, localStorage, booking logic, and CSV report generation.

## Future enhancement
Connect a backend/database, hashed-password authentication, role-based admin access, transactional seat inventory, payment gateway test mode, and real email confirmation service.
