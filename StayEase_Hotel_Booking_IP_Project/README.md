# StayEase — Online Hotel Room Booking Website (HTML/CSS/JavaScript)

A responsive, front-end academic prototype for an Internet Programming (IP) subject.

## Run it
1. Extract the ZIP.
2. Open `index.html` in Chrome/Edge. For the best experience, use VS Code Live Server.
3. Register a demo account on Login / Register, then select a room and book it.
4. Open `admin.html` to edit sample room rates/quantities, bookings, and static content.

## Included pages
- `index.html`: home, search form, featured room categories
- `rooms.html`: four room categories and prices
- `login.html`: demo registration/login
- `dashboard.html`: profile, booking history, eligible date changes/cancellations, reviews
- `booking.html`: date validation, availability estimate, booking confirmation
- `admin.html`: room inventory/rate edits, booking edits/cancellation, editable static content
- `contact.html`, `faq.html`, `travel.html`, `privacy.html`: informational pages

## Important academic prototype limitations
This is intentionally built with HTML, CSS, and browser JavaScript only. Data is stored in the current browser's `localStorage`, so it is not shared between devices and can be cleared by the user. It is not a production booking service. Login passwords are stored in plain text locally and must never be real passwords. The admin page is not protected by server-side authentication. Payment, confirmation email, and live external room inventory are simulated/not integrated. A real service needs a secure backend, hashed passwords, server-side validation, database, role-based authorization, payment-provider integration, and an email service.

## Booking rules implemented
- User profile and demo booking history
- Booking availability based on sample room quantity and overlapping bookings in this browser
- Four room types with editable sample quantity and price
- Changes and cancellations permitted only at least 3 days before check-in for the customer dashboard
- Admin can edit/cancel any demo booking
- Basic review and rating entry
- Static page text is editable in the admin panel

## Suggested IP viva points
- HTML5 structures pages and forms.
- CSS3 media queries implement responsive layouts.
- JavaScript validates input, handles booking rules, and updates the interface.
- `localStorage` demonstrates persistence on one browser.
- Explain that real authentication, email, and payment require server APIs and security controls.
