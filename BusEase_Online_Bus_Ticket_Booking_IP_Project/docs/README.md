# BusEase — Online Bus Ticket Booking System
Internet Programming Lab Experiment | HTML5, CSS3, JavaScript

## Run
1. Extract the ZIP.
2. Open `index.html` in Chrome/Edge, or open the folder in VS Code and use Live Server.
3. Register a demo account. Search a sample route, choose a bus, select seats, enter passenger details, and confirm the booking.
4. Open `admin.html` to manage schedules, categories, bookings, news, and reports.

## Pages
- `index.html` home and route search
- `buses.html` sample schedule search
- `login.html` registration and login
- `book.html` seat map, passenger details, simulated payment choice
- `dashboard.html` profile, booking history, cancellation, demo password utilities
- `admin.html` bus/category maintenance, registered users, booking management, news, comments, CSV report
- `comments.html`, `news.html`, `about.html`, `contact.html`, `privacy.html`

## Important limitations
This is a static frontend academic prototype. Data uses localStorage in the current browser only. Passwords are not securely hashed and the admin panel is not protected by server-side authentication. Payment gateways, email confirmations, password-reset email, live operator data, and shared inventory are not connected. Do not use real credentials or payment information. A production system needs backend APIs, database transactions, secure authentication/authorization, password hashing, email provider, and payment gateway integration.

## Main modules
1. Login/registration
2. Bus search and categories
3. Seat selection and ticket booking
4. Booking history and cancellation
5. Admin schedule/category management
6. Comments and travel news
7. Report generation (CSV)
