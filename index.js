function validatePassword(password1, password2) {
    if (password1 !== password2) {
        return false;
    }
    if (password1.length < 8) {
        return false;
    }
    let hasNumber = false;
    let hasUpper = false;
    let hasLower = false;

    for (let char of password1) {
        if (isNaN(char)) {
            hasNumber = true;
        }
        if (char == char.toUpperCase() && char !== char.toLowerCase()) {
            hasUpper = true;
        }
        if (char == char.toLowerCase() && char !== char.toUpperCase()) {
            hasLower = true;
        }
    }
    return hasNumber && hasUpper && hasLower;
}

function reversePassword(password) {
    let reversed = '';
    for (let i = password.length - 1; i >= 0; i--) {
        reversed += password[i];
    }
    return reversed;
}

function storePassword(user, password1, password2) {
    if (!validatePassword(password1, password2)) {
        if (password1 !== password2) {
            return "Wrong Password!";
        } else if (password1.length < 8) {
            return "Insufficient Number of Strings!";
        } else {
            return "Invalid Password!"
        }
    } else {
        return {
            username: user,
            actualPassword: password1,
            newPassword: reversePassword(password1)
        } ;
    }
}


console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "pass1234", "pass1234"));
console.log(storePassword("John", "pass1234", "pass1234567"));
console.log(storePassword("John", "pass1", "pass1"));