# Online Train Reservation System — Project Report

## Abstract
RailReserve is a responsive web application prototype that demonstrates the core flow of an online train reservation system. Passengers can register and sign in, search sample train services by origin and destination, compare class fares and seat availability, enter passenger details, generate a demo ticket with a PNR, check booking status, view booking history, print a ticket, and request cancellation with an estimated refund. An admin page supports sample schedule management and reservation CSV export. The user interface is implemented with HTML, CSS and JavaScript and adapts to desktop, tablet and mobile screens.

## Objectives
1. Provide a simple interface for searching trains and viewing schedules.
2. Demonstrate passenger registration and login.
3. Capture passenger, journey, class and payment-mode details.
4. Generate a sample PNR and ticket after a demo booking.
5. Demonstrate PNR status lookup and booking history.
6. Demonstrate cancellation, refund estimation and admin schedule/report functions.

## Modules
1. User Registration and Authentication
2. Train Search and Availability
3. Passenger and Ticket Booking
4. PNR Status and Booking History
5. Ticket Cancellation and Refund Estimate
6. Admin Schedule and Report Management

## Technologies
- HTML5 for page structure
- CSS3 for responsive styling and layout
- JavaScript for validation and interactive workflows
- Browser localStorage/sessionStorage for demo persistence

## Limitations
The application is not connected to an official railway system. Sample data is used for trains, seats, fares, PNR status and refund policy. Payment processing, secure production authentication, shared live seat inventory and email delivery are not implemented. Browser localStorage is not secure enough for production personal or payment information.

## Conclusion
RailReserve illustrates the key front-end workflows of a railway reservation system and can be extended with a server-side application, database, secure payment gateway and authorized schedule/availability integrations.
