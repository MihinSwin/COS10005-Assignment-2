/* PAGE SETUP */

function init() {

    var recommendForm = document.getElementById("recommendForm");

    if (recommendForm) {
        recommendForm.onsubmit = recommendMovie;
    }


    var registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.onsubmit = validateRegistration;


        /* CLEAR REGISTRATION ERRORS WHILE USER CORRECTS INPUT */

        document.getElementById("username").oninput = function() {
            clearError("usernameError");
        };

        document.getElementById("registerEmail").oninput = function() {
            clearError("registerEmailError");
        };

        document.getElementById("registerPhone").oninput = function() {
            clearError("registerPhoneError");
        };

        document.getElementById("password").oninput = function() {
            clearError("passwordError");
        };

        document.getElementById("confirmPassword").oninput = function() {
            clearError("confirmPasswordError");
        };

        document.getElementById("genderMale").onchange = function() {
            clearError("genderError");
        };

        document.getElementById("genderFemale").onchange = function() {
            clearError("genderError");
        };

        document.getElementById("genderOther").onchange = function() {
            clearError("genderError");
        };

        document.getElementById("genreAction").onchange = function() {
            clearError("genreError");
        };

        document.getElementById("genreComedy").onchange = function() {
            clearError("genreError");
        };

        document.getElementById("genreAnimation").onchange = function() {
            clearError("genreError");
        };

        document.getElementById("genreDrama").onchange = function() {
            clearError("genreError");
        };

        document.getElementById("country").onchange = function() {
            clearError("countryError");
        };
    }


    var bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.onsubmit = validateBooking;

        prefillMovie();
        updateBookingCost();


        document.getElementById("movieSelect").onchange = function() {
            updateBookingCost();
            clearError("movieError");
        };

        document.getElementById("ticketQuantity").oninput = function() {
            updateBookingCost();
            clearError("ticketQuantityError");
        };

        document.getElementById("paymentVoucher").onchange =
            paymentChanged;

        document.getElementById("paymentOnline").onchange =
            paymentChanged;

        document.getElementById("sameEmail").onchange =
            copyBillingEmail;

        document.getElementById("bookingName").oninput = function() {
            clearError("bookingNameError");
        };

        document.getElementById("bookingEmail").oninput = function() {

            clearError("bookingEmailError");

            if (document.getElementById("sameEmail").checked) {
                copyBillingEmail();
            }
        };

        document.getElementById("bookingPhone").oninput = function() {
            clearError("bookingPhoneError");
        };

        document.getElementById("screeningDateTime").onchange = function() {
            clearError("screeningError");
        };

        document.getElementById("ticketType").onchange = function() {
            clearError("ticketTypeError");
        };

        document.getElementById("billingEmail").oninput = function() {
            clearError("billingEmailError");
        };

        document.getElementById("cardType").onchange = function() {
            clearError("cardTypeError");
        };

        document.getElementById("cardNumber").oninput = function() {
            clearError("cardNumberError");
        };
    }
}


window.onload = init;



/* CLEAR ERROR MESSAGE */

function clearError(errorId) {
    document.getElementById(errorId).textContent = "";
}



/* MOVIE RECOMMENDATION */

function recommendMovie() {

    var genre = document.getElementById("recGenre").value;
    var age = document.getElementById("recAge").value;
    var viewing = document.getElementById("recViewing").value;

    var result = document.getElementById("recommendationResult");
    var title = document.getElementById("recommendationTitle");
    var reason = document.getElementById("recommendationReason");
    var link = document.getElementById("recommendationLink");
    var image = document.getElementById("recommendationImage");

    var movie = "";
    var message = "";


    if (genre === "" ||
        age === "" ||
        viewing === "") {

        alert("Please select all three movie preferences.");
        return false;
    }


    /* CHILD RECOMMENDATIONS */

    if (age === "Child") {

        if (genre === "Action") {

            movie = "Skybound";

            message =
                "Skybound is a suitable action choice for younger viewers " +
                "because it has a PG rating and focuses on an adventure and rescue story.";

        } else {

            movie = "Star Garden";

            message =
                "Star Garden is a family-friendly animated movie and is suitable " +
                "for younger viewers.";
        }
    }


    /* ACTION */

    else if (genre === "Action") {

        if (viewing === "Friends" &&
            age === "Adult") {

            movie = "Neon Pursuit";

            message =
                "Neon Pursuit is recommended because you selected Action, Adult " +
                "and Friends. It is a faster-paced movie suited to a group movie night.";

        } else {

            movie = "Skybound";

            message =
                "Skybound matches your interest in Action while providing an " +
                "adventure suitable for a wider audience.";
        }
    }


    /* COMEDY */

    else if (genre === "Comedy") {

        if (viewing === "Date Night" &&
            age === "Adult") {

            movie = "Weekend Reset";

            message =
                "Weekend Reset combines comedy and drama and is a good match " +
                "for an adult date night.";

        } else {

            movie = "Side Quest";

            message =
                "Side Quest is recommended because it is a light comedy that " +
                "works well for a relaxed movie night.";
        }
    }


    /* ANIMATION */

    else if (genre === "Animation") {

        movie = "Star Garden";

        message =
            "Star Garden matches your preference for Animation and provides " +
            "a colourful story suitable for different viewing situations.";
    }


    /* DRAMA */

    else if (genre === "Drama") {

        if (viewing === "Friends") {

            movie = "Weekend Reset";

            message =
                "Weekend Reset is recommended because it combines drama with " +
                "comedy and focuses on a group of friends.";

        } else {

            movie = "Paper Moons";

            message =
                "Paper Moons matches your preference for Drama and is suited " +
                "to a quieter movie experience.";
        }
    }


    /* DISPLAY RECOMMENDATION */

    title.textContent = movie;
    reason.textContent = message;

    link.href =
        "booking.html?movie=" +
        encodeURIComponent(movie);


    /* RECOMMENDED MOVIE POSTER */

    if (movie === "Neon Pursuit") {
        image.src = "images/movie1.jpg";
    } else if (movie === "Side Quest") {
        image.src = "images/movie2.jpg";
    } else if (movie === "Star Garden") {
        image.src = "images/movie3.jpg";
    } else if (movie === "Paper Moons") {
        image.src = "images/movie4.jpg";
    } else if (movie === "Skybound") {
        image.src = "images/movie5.jpg";
    } else if (movie === "Weekend Reset") {
        image.src = "images/movie6.jpg";
    }

    image.alt = movie + " movie poster";

    result.hidden = false;

    return false;
}



/* REGISTRATION VALIDATION */

function validateRegistration() {

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("registerEmail").value.trim();
    var phone = document.getElementById("registerPhone").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var genderMale = document.getElementById("genderMale").checked;
    var genderFemale = document.getElementById("genderFemale").checked;
    var genderOther = document.getElementById("genderOther").checked;

    var genreAction = document.getElementById("genreAction").checked;
    var genreComedy = document.getElementById("genreComedy").checked;
    var genreAnimation = document.getElementById("genreAnimation").checked;
    var genreDrama = document.getElementById("genreDrama").checked;

    var country = document.getElementById("country").value;

    var valid = true;


    /* CLEAR OLD ERROR MESSAGES */

    document.getElementById("usernameError").textContent = "";
    document.getElementById("registerEmailError").textContent = "";
    document.getElementById("registerPhoneError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("genreError").textContent = "";
    document.getElementById("countryError").textContent = "";


    /* USERNAME */

    var usernamePattern = /^[A-Za-z0-9_]+$/;

    if (username === "") {

        document.getElementById("usernameError").textContent =
            "Please enter a username.";

        valid = false;

    } else if (username.length < 5) {

        document.getElementById("usernameError").textContent =
            "Username must contain at least 5 characters.";

        valid = false;

    } else if (!usernamePattern.test(username)) {

        document.getElementById("usernameError").textContent =
            "Username can only contain letters, numbers and underscores.";

        valid = false;
    }


    /* EMAIL */

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        document.getElementById("registerEmailError").textContent =
            "Please enter an email address.";

        valid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("registerEmailError").textContent =
            "Please enter a valid email address.";

        valid = false;
    }


    /* PHONE NUMBER */

    var phonePattern = /^\d{8,15}$/;

    if (phone === "") {

        document.getElementById("registerPhoneError").textContent =
            "Please enter a phone number.";

        valid = false;

    } else if (!phonePattern.test(phone)) {

        document.getElementById("registerPhoneError").textContent =
            "Phone number must contain 8 to 15 digits only.";

        valid = false;
    }


    /* PASSWORD */

    if (password === "") {

        document.getElementById("passwordError").textContent =
            "Please enter a password.";

        valid = false;

    } else if (password.length < 10) {

        document.getElementById("passwordError").textContent =
            "Password must contain at least 10 characters.";

        valid = false;

    } else if (!/[A-Z]/.test(password)) {

        document.getElementById("passwordError").textContent =
            "Password must contain an uppercase letter.";

        valid = false;

    } else if (!/[a-z]/.test(password)) {

        document.getElementById("passwordError").textContent =
            "Password must contain a lowercase letter.";

        valid = false;

    } else if (!/[0-9]/.test(password)) {

        document.getElementById("passwordError").textContent =
            "Password must contain a number.";

        valid = false;

    } else if (!/[^A-Za-z0-9]/.test(password)) {

        document.getElementById("passwordError").textContent =
            "Password must contain a special character.";

        valid = false;
    }


    /* CONFIRM PASSWORD */

    if (confirmPassword === "") {

        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";

        valid = false;

    } else if (confirmPassword !== password) {

        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";

        valid = false;
    }


    /* GENDER */

    if (!genderMale &&
        !genderFemale &&
        !genderOther) {

        document.getElementById("genderError").textContent =
            "Please select a gender.";

        valid = false;
    }


    /* MOVIE GENRE */

    if (!genreAction &&
        !genreComedy &&
        !genreAnimation &&
        !genreDrama) {

        document.getElementById("genreError").textContent =
            "Please select at least one movie genre.";

        valid = false;
    }


    /* COUNTRY */

    if (country === "") {

        document.getElementById("countryError").textContent =
            "Please select your country or region.";

        valid = false;
    }


    if (valid) {
        alert("Registration details are valid.");
    }

    return valid;
}



/* MOVIE PRE-FILL */

function prefillMovie() {

    var parameters = new URLSearchParams(window.location.search);
    var movie = parameters.get("movie");

    if (movie) {
        document.getElementById("movieSelect").value = movie;
    }
}



/* BOOKING COST */

function updateBookingCost() {

    var movie = document.getElementById("movieSelect").value;
    var quantity =
        Number(document.getElementById("ticketQuantity").value);

    var price = 0;


    if (movie === "Neon Pursuit") {
        price = 22;
    } else if (movie === "Side Quest") {
        price = 18;
    } else if (movie === "Star Garden") {
        price = 16;
    } else if (movie === "Paper Moons") {
        price = 20;
    } else if (movie === "Skybound") {
        price = 21;
    } else if (movie === "Weekend Reset") {
        price = 19;
    }


    if (quantity < 1 ||
        isNaN(quantity)) {

        quantity = 0;
    }


    var total = price * quantity;

    document.getElementById("bookingCost").textContent =
        "$" + total.toFixed(2);
}



/* PAYMENT METHOD */

function paymentChanged() {

    var voucherSelected =
        document.getElementById("paymentVoucher").checked;

    var onlineSelected =
        document.getElementById("paymentOnline").checked;

    var voucherFields =
        document.getElementById("voucherFields");

    var cardFields =
        document.getElementById("cardFields");


    clearError("paymentMethodError");


    if (voucherSelected) {

        voucherFields.hidden = false;
        cardFields.hidden = true;

        clearError("cardTypeError");
        clearError("cardNumberError");

    } else if (onlineSelected) {

        voucherFields.hidden = true;
        cardFields.hidden = false;
    }
}



/* COPY BILLING EMAIL */

function copyBillingEmail() {

    var sameEmail =
        document.getElementById("sameEmail").checked;

    var bookingEmail =
        document.getElementById("bookingEmail").value;

    var billingEmail =
        document.getElementById("billingEmail");


    if (sameEmail) {

        billingEmail.value = bookingEmail;
        clearError("billingEmailError");

    } else {

        billingEmail.value = "";
    }
}



/* BOOKING VALIDATION */

function validateBooking() {

    var name = document.getElementById("bookingName").value.trim();
    var email = document.getElementById("bookingEmail").value.trim();
    var phone = document.getElementById("bookingPhone").value.trim();
    var movie = document.getElementById("movieSelect").value;
    var screening = document.getElementById("screeningDateTime").value;

    var quantity =
        Number(document.getElementById("ticketQuantity").value);

    var ticketType = document.getElementById("ticketType").value;

    var voucherSelected =
        document.getElementById("paymentVoucher").checked;

    var onlineSelected =
        document.getElementById("paymentOnline").checked;

    var cardType = document.getElementById("cardType").value;

    var cardNumber =
        document.getElementById("cardNumber").value.replace(/\s/g, "");

    var billingEmail =
        document.getElementById("billingEmail").value.trim();

    var valid = true;


    /* CLEAR OLD ERROR MESSAGES */

    document.getElementById("bookingNameError").textContent = "";
    document.getElementById("bookingEmailError").textContent = "";
    document.getElementById("bookingPhoneError").textContent = "";
    document.getElementById("movieError").textContent = "";
    document.getElementById("screeningError").textContent = "";
    document.getElementById("ticketQuantityError").textContent = "";
    document.getElementById("ticketTypeError").textContent = "";
    document.getElementById("paymentMethodError").textContent = "";
    document.getElementById("cardTypeError").textContent = "";
    document.getElementById("cardNumberError").textContent = "";
    document.getElementById("billingEmailError").textContent = "";


    /* FULL NAME */

    if (name === "") {

        document.getElementById("bookingNameError").textContent =
            "Please enter your full name.";

        valid = false;
    }


    /* EMAIL */

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        document.getElementById("bookingEmailError").textContent =
            "Please enter your email address.";

        valid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("bookingEmailError").textContent =
            "Please enter a valid email address.";

        valid = false;
    }


    /* PHONE NUMBER */

    var bookingPhonePattern = /^\d{10,}$/;

    if (phone === "") {

        document.getElementById("bookingPhoneError").textContent =
            "Please enter your phone number.";

        valid = false;

    } else if (!bookingPhonePattern.test(phone)) {

        document.getElementById("bookingPhoneError").textContent =
            "Phone number must contain at least 10 digits.";

        valid = false;
    }


    /* MOVIE */

    if (movie === "") {

        document.getElementById("movieError").textContent =
            "Please select a movie.";

        valid = false;
    }


    /* SCREENING DATE AND TIME */

    if (screening === "") {

        document.getElementById("screeningError").textContent =
            "Please select a screening date and time.";

        valid = false;

    } else {

        var screeningDate = new Date(screening);
        var currentDate = new Date();

        if (screeningDate <= currentDate) {

            document.getElementById("screeningError").textContent =
                "Screening date and time cannot be in the past.";

            valid = false;
        }
    }


    /* NUMBER OF TICKETS */

    if (quantity < 1 ||
        isNaN(quantity)) {

        document.getElementById("ticketQuantityError").textContent =
            "Number of tickets must be greater than 0.";

        valid = false;
    }


    /* TICKET TYPE */

    if (ticketType === "") {

        document.getElementById("ticketTypeError").textContent =
            "Please select a ticket type.";

        valid = false;
    }


    /* PAYMENT METHOD */

    if (!voucherSelected &&
        !onlineSelected) {

        document.getElementById("paymentMethodError").textContent =
            "Please select a payment method.";

        valid = false;
    }


    /* ONLINE PAYMENT */

    if (onlineSelected) {

        if (cardType === "") {

            document.getElementById("cardTypeError").textContent =
                "Please select a card type.";

            valid = false;
        }


        if (cardNumber === "") {

            document.getElementById("cardNumberError").textContent =
                "Please enter a card number.";

            valid = false;

        } else if (!/^\d+$/.test(cardNumber)) {

            document.getElementById("cardNumberError").textContent =
                "Card number must contain digits only.";

            valid = false;

        } else if ((cardType === "Visa" ||
                    cardType === "Mastercard") &&
                   cardNumber.length !== 16) {

            document.getElementById("cardNumberError").textContent =
                "Visa and Mastercard numbers must contain 16 digits.";

            valid = false;

        } else if (cardType === "Amex" &&
                   cardNumber.length !== 15) {

            document.getElementById("cardNumberError").textContent =
                "American Express numbers must contain 15 digits.";

            valid = false;
        }
    }


    /* BILLING EMAIL */

    if (billingEmail === "") {

        document.getElementById("billingEmailError").textContent =
            "Please enter a billing email address.";

        valid = false;

    } else if (!emailPattern.test(billingEmail)) {

        document.getElementById("billingEmailError").textContent =
            "Please enter a valid billing email address.";

        valid = false;
    }


    if (valid) {
        alert("Booking details are valid.");
    }

    return valid;
}