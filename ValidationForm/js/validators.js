function checkPasswordEqual(password1, password2){
   if(password1 === password2){
       return true;
   }
    else {
        return false;
    }
};

function checkEmail(input){
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var email = input.val();
    var result = pattern.test(email);

    return result;
};

function checkIfEmptyInput(input){
    if(input.val().length === 0){
        return true;
    }
    else {
        return false;
    }
};

function checkPostCode(input){
    var pattern = /[0-9]{2}\-[0-9]{3}/;

    var postCode = input.val();
    var result = pattern.test(postCode);

    return result;
};

function checkPhone(input){
    var pattern = /\d{3}[\-]\d{3}[\-]\d{3}$/;

    var phone = input.val();
    var result = pattern.test(phone);

    return result;
};

function checkTermsAndConditions(input){
    return input.is(':checked');

};
