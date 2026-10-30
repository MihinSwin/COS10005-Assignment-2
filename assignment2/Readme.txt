CineMatch - COS10005 Assignment 2

Student Name: Mihin Premarathne  
Student ID: 104361248


ABOUT THE WEBSITE

For this assignment I created a movie discovery and ticket booking website called CineMatch.

The main idea of the website is to let users browse movies, get a movie recommendation based on their preferences, register for an account and book movie tickets.

I used six fictional movies for the website so I could create my own movie names, descriptions and posters instead of using real movies.


WEBSITE FILES

assignment2/
|
|-- index.html
|-- movies.html
|-- recommend.html
|-- register.html
|-- booking.html
|-- Readme.txt
|
|-- css/
|   |-- style.css
|
|-- js/
|   |-- script.js
|
|-- images/
    |-- hero.jpg
    |-- movie1.jpg
    |-- movie2.jpg
    |-- movie3.jpg
    |-- movie4.jpg
    |-- movie5.jpg
    |-- movie6.jpg


PAGES

index.html

This is the home page for CineMatch. It gives a short introduction to the website and has links to browse the movies or get a recommendation.


movies.html

This page shows the six movies available on CineMatch.

The movies are:
- Neon Pursuit
- Side Quest
- Star Garden
- Paper Moons
- Skybound
- Weekend Reset

Each movie has its genre, rating, running time, description, ticket price, screening times and poster.

The user can also click the booking button for a movie and the selected movie will automatically appear on the booking page.


recommend.html

This page lets the user choose:
- Preferred genre
- Age group
- Viewing preference

JavaScript checks these selections and recommends a movie using a set of if and else conditions.

The recommendation also shows the movie poster and a short explanation of why the movie was selected.

The user can then click "Book This Movie" and the recommended movie will automatically be selected on the booking page.


register.html

This page contains the registration form.

JavaScript is used to check the form before it is submitted.

The validation checks:
- Username is at least 5 characters and only uses letters, numbers or underscores
- Email is in a valid format
- Phone number contains 8 to 15 digits
- Password is at least 10 characters
- Password contains uppercase, lowercase, a number and a special character
- Confirm password matches the password
- Gender is selected
- At least one preferred movie genre is selected
- Country or region is selected

If there is a problem, an error message is shown near the field and the form will not submit until the problem is fixed.


booking.html

This page is used to book movie tickets.

If the user comes from the Movies page or Recommendation page, the selected movie is automatically filled into the movie dropdown.

The booking form checks:
- Full name is entered
- Email is valid
- Phone number has at least 10 digits
- A movie is selected
- Screening date and time is not in the past
- Number of tickets is greater than 0
- Ticket type is selected
- Payment method is selected
- Billing email is valid

The booking price also changes depending on the selected movie and number of tickets.


PAYMENT

The booking page has two payment options.

Voucher

If Voucher is selected, the voucher code field is displayed and the credit card section is hidden.

The voucher code itself is not validated because the assignment specification says it does not need to be validated.


Online Payment

If Online Payment is selected, the credit card fields are displayed.

The card number validation checks:
- Only digits are used
- Visa and Mastercard have 16 digits
- American Express has 15 digits

Spaces between card number groups are ignored during validation, so a number such as:

1234 1234 1234 1234

is treated the same as:

1234123412341234

No real payment processing is used.


MOVIE PRE-FILLING

I used URL parameters to carry the selected movie to the booking page.

For example, a link can look like:

booking.html?movie=Skybound

JavaScript uses URLSearchParams to read the movie name and then selects the matching movie in the booking dropdown.


BOOKING COST

Each movie has its own ticket price.

JavaScript checks which movie is selected and multiplies the movie price by the number of tickets.

For example:

Neon Pursuit = $22 per ticket

If the user selects 2 tickets:

$22 x 2 = $44


RESPONSIVE DESIGN

The website has responsive CSS for desktop, tablet and mobile screen sizes.

The layout changes depending on the screen width so the movie cards, forms and recommendation section are easier to use on smaller screens.


MERCURY LINK

http://mercury.swin.edu.au/cos10005/s104361248/assignment2/


GITHUB LINK

https://github.com/MihinSwin/COS10005-Assignment-2.git


KNOWN ISSUES / LIMITATIONS

- The website is only a front-end website and does not use a database.
- Registration details are not permanently saved.
- There is no real payment processing.
- Voucher codes are not checked against a real voucher system.
- Movie recommendations are based on simple JavaScript rules.
- All movies on the website are fictional.


IMAGE REFERENCES

The homepage hero image and the six fictional movie poster images were generated using Grok Imagine by xAI for this assignment.

Images used:

logo.png - CineMatch logo created using AI image generation and edited for use on the website.

hero.jpg - CineMatch cinema hero image

movie1.jpg - Neon Pursuit

movie2.jpg - Side Quest

movie3.jpg - Star Garden

movie4.jpg - Paper Moons

movie5.jpg - Skybound

movie6.jpg - Weekend Reset

I did not use any real commercial movie posters for the six fictional movies.


OTHER REFERENCES

No other third-party images were used on the website.