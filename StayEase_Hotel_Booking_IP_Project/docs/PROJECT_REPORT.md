# StayEase — Online Hotel Room Booking Website

## 1. Aim
To design a responsive hotel booking website that demonstrates room search, room information, booking management, user profiles, and basic administrator controls using HTML5, CSS3, and JavaScript.

## 2. Objectives
- Provide a responsive interface for desktop, tablet, and mobile.
- Display four room types with sample prices, capacity, and amenities.
- Demonstrate account registration, login, and profile editing.
- Check sample room inventory for selected date ranges.
- Save bookings and display booking history.
- Apply the specified three-day booking-change/cancellation rule.
- Allow an administrator prototype to change prices, room quantities, booking details, and static page content.

## 3. Technology stack
- HTML5: semantic page structure and form controls.
- CSS3: responsive grid/flex layouts, typography, and visual design.
- JavaScript: form validation, booking rules, rendering, and interactions.
- Browser localStorage: local demonstration persistence.

## 4. Main modules
1. **User account module:** registration, login, profile viewing/editing.
2. **Room search and information module:** four room categories, rates, amenities, and guest capacity.
3. **Booking module:** date validation, availability check, confirmation reference, booking history, date changes/cancellations, and reviews.
4. **Administrator module:** room quantity/rate updates, booking edits/cancellations, and static-content editing.
5. **Information module:** contact, FAQ, local travel guide, and privacy policy.

## 5. Booking rules
- Check-out must be after check-in.
- Dates must be in the future for new bookings.
- Guest count must not exceed the selected room's stated capacity.
- Availability is estimated from configured quantity and overlapping active bookings in local browser data.
- Customers may modify/cancel a booking only when check-in is at least three days away.
- Admin prototype can modify/cancel any booking.

## 6. Test cases
| ID | Test | Expected result |
|---|---|---|
| TC01 | Open home page on desktop/mobile | Layout adapts to viewport |
| TC02 | Register with a new email | Demo account created and dashboard opens |
| TC03 | Register with an existing email | Duplicate-account message shown |
| TC04 | Log in with incorrect credentials | Error message shown |
| TC05 | Submit check-out earlier than check-in | Validation message shown |
| TC06 | Select more guests than room capacity | Booking rejected with message |
| TC07 | Check available room dates | Availability estimate and price shown |
| TC08 | Confirm valid demo booking | Reference displayed and booking saved |
| TC09 | Change booking fewer than 3 days before arrival | Customer change blocked |
| TC10 | Cancel booking at least 3 days before arrival | Booking status becomes cancelled |
| TC11 | Admin updates price and quantity | Updated values persist in this browser |
| TC12 | Admin edits/cancels a booking | Booking changes appear in admin list |
| TC13 | Admin edits FAQ/travel/privacy content | Updated text appears on relevant page |
| TC14 | Open all static information pages | Contact, FAQ, travel guide, and privacy content displayed |

## 7. Limitations and future scope
This is a front-end academic demonstration, not a real reservation system. Local storage is not a shared database and does not provide secure authentication. Payment gateway and email delivery are placeholders. Future work can add a backend API, database, secure password hashing, server-side role permissions, transaction-safe inventory checks, a real payment provider in test mode, and email confirmations.

## 8. Conclusion
StayEase demonstrates the main user interface and client-side workflows of a hotel room booking website using core Internet Programming technologies. It is suitable for a classroom demo and can be extended into a full-stack application.
