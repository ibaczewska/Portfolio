$(document).ready(function () {

    //check inputs if empty, if true - added class invalid
    $('#firstName, #lastName, #address1, #address2, #townCity').on('blur', function () {
        var input = $(this);
        var sibling = input.siblings('.info-panel');
        if (checkIfEmptyInput(input) === true) {
            input.addClass('invalid');
            sibling.removeClass('hidden');
        }
        else {
            input.removeClass('invalid');
            sibling.addClass('hidden');
        }
    });

    //check if e-mail is correct, if not - added class invalid
    $('#inputEmail').on('blur', function () {
        var input = $(this);
        var sibling = input.siblings('.info-panel');
        if (checkEmail(input) === false) {
            input.addClass('invalid');
            sibling.removeClass('hidden');
        }
        else {
            input.removeClass('invalid');
            sibling.addClass('hidden');
        }
    });

    //check if passwords are correct, if not - add class invalid
    $('#inputPassword').on('blur', function () {
        var input = $(this);
        var sibling = input.siblings('.info-panel');
        var name_length = input.val().length;
        if (name_length == 0) {
            input.addClass('invalid');
            sibling.removeClass('hidden');
        }
        else {
            input.removeClass('invalid');
            sibling.addClass('hidden');
        }
    });
    $('#confirmPassword').on('blur', function () {
        var password1 = $('#inputPassword').val();
        var password2 = $('#confirmPassword').val();
        var input = $(this);
        var sibling = input.siblings('.info-panel');
        if (checkPasswordEqual(password1, password2) === false || checkIfEmptyInput(input) === true) {
            input.addClass('invalid');
            sibling.removeClass('hidden');
        }
        else {
            input.removeClass('invalid');
            sibling.addClass('hidden');
        }
    });

    //check if post code is correct, if not - add class invalid
    $('#postCode').on('blur', function () {
        var input = $(this);
        var sibling = input.siblings('.info-panel');
        if (checkPostCode(input) === false) {
            input.addClass('invalid');
            sibling.removeClass('hidden');
        }
        else {
            input.removeClass('invalid');
            sibling.addClass('hidden');
        }
    });

    //check if phone is correct, if not - add class invalid
    $('#phone').on('blur', function () {
        var input = $(this);
        var sibling = input.siblings('.info-panel');
        if (checkPhone(input) === false) {
            input.addClass('invalid');
            sibling.removeClass('hidden');
        }
        else {
            input.removeClass('invalid');
            sibling.addClass('hidden');
        }
    });

    //after submit
    $('#submit').click(function () {
        var name = $('#firstName');
        var input = $('#termsAndConditions');
        $('input').blur();
        setAllErrors();
    });

    function setAllErrors() {
        var firstName = $('#firstName');
        var lastName = $('#lastName');
        var inputEmail = $('#inputEmail');
        var inputPassword = $('#inputPassword');
        var confirmPassword = $('#confirmPassword');
        var confirmPassword = $('#confirmPassword');
        var address1 = $('#address1');
        var address2 = $('#address2');
        var townCity = $('#townCity');
        var postCode = $('#postCode');
        var phone = $('#phone');
        var termsAndConditions = $('#termsAndConditions');
        var countsErrors = 0;

        //remove text from div #dataInstructionalReview
        $('#dataInstructionalReview').empty();

        $('#dataInstructionalReview').addClass('hidden');

        //add errors to #dataInstructionalReview
        if (checkIfEmptyInput(firstName) === true) {
            $('#dataInstructionalReview').removeClass('hidden');
            $('#dataInstructionalReview').append('<p> First name field cannot be empty </p>');
            countsErrors++;
        }

        if (checkIfEmptyInput(lastName) === true) {
            $('#dataInstructionalReview').removeClass('hidden');
            $('#dataInstructionalReview').append('<p> Last name field cannot be empty </p>');
            countsErrors++;
        }

        if (checkIfEmptyInput(inputEmail) === true) {
            $('#dataInstructionalReview').removeClass('hidden');
            $('#dataInstructionalReview').append('<p> E-mail input cannot be empty</p>');
            countsErrors++;
        }

        if (checkIfEmptyInput(inputPassword) === true) {
            $('#dataInstructionalReview').removeClass('hidden');
            $('#dataInstructionalReview').append('<p> Password field cannot be empty </p>');
            countsErrors++;
        }

        if (checkIfEmptyInput(confirmPassword) === true) {
            $('#dataInstructionalReview').removeClass('hidden');
            $('#dataInstructionalReview').append('<p> Confirm password field cannot be empty </p>');
            countsErrors++;
        }
        if (checkIfEmptyInput(address1) === true) {
            $('#dataInstructionalReview').removeClass('hidden');
            $('#dataInstructionalReview').append('<p> Address field cannot be empty </p>');
            countsErrors++;
        }

        if (checkIfEmptyInput(address2) === true) {
            $('#dataInstructionalReview').removeClass('hidden');
            $('#dataInstructionalReview').append('<p> Address field cannot be empty </p>');
            countsErrors++;
        }

        if (checkIfEmptyInput(townCity) === true) {
            $('#dataInstructionalReview').removeClass('hidden');
            $('#dataInstructionalReview').append('<p> Town/city field cannot be empty </p>');
            countsErrors++;
        }

        if (checkIfEmptyInput(postCode) === true) {
            $('#dataInstructionalReview').removeClass('hidden');
            $('#dataInstructionalReview').append('<p> Post code field cannot be empty </p>');
            countsErrors++;
        }

        if (checkIfEmptyInput(phone) === true) {
            $('#dataInstructionalReview').removeClass('hidden');
            $('#dataInstructionalReview').append('<p> Phone field cannot be empty </p>');
            countsErrors++;
        }

        if (checkTermsAndConditions(termsAndConditions) === false) {
            $('#dataInstructionalReview').removeClass('hidden');
            $('#dataInstructionalReview').append('<p> Terms and conditions are required </p>');
            countsErrors++;
        }

        //alert if form is complete and correct
        if (countsErrors === 0) {
            alert('Pomyślnie wysłano formularz!');
        }
    };
});
