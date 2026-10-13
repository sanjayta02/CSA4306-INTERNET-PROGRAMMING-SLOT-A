# RailReserve — Online Train Reservation System

A responsive Internet Programming lab project built with HTML5, CSS3 and JavaScript.

## Run
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Register a demo account or use the seeded credentials below.

## Demo accounts
- Passenger: `user@railreserve.demo` / `rail123`
- Admin: `admin@railreserve.demo` / `admin123`

## Pages
- `index.html` — home and train search
- `trains.html` — route/class filters and sample availability
- `register.html`, `login.html`, `forgot-password.html` — account UI
- `book.html` — passenger details, class, fare and demo payment mode
- `pnr.html` — PNR lookup with Confirmed/RAC/Waiting List statuses
- `dashboard.html` — booking history, ticket printing, cancellation/refund estimate
- `admin.html` — manage sample schedules and export reservations as CSV
- `about.html`, `contact.html` — project information and contact form

## Important limitations
This is a front-end lab prototype. Data is stored in browser `localStorage`; it is not a shared database. Payment is simulated and no actual money is collected. No real confirmation emails are sent. Sample train schedules, availability, PNRs, and refund percentages are not official railway information. Do not use this system for actual travel.

## Production upgrades
For a deployable system, add a backend (Flask/Node/PHP), SQL database, server-side authentication and role checks, real railway schedule/availability integrations, payment gateway, email/SMS provider, concurrency-safe seat locking, secure refund processing, audit logs, and privacy/security controls.
