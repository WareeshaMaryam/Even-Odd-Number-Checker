function result() {
    let num = +prompt("Enter a number to check if is it Even Number or Odd Number?");
    let message = document.getElementById("message");
    let error = document.getElementById("error");

    if (isNaN(num)) {
        error.textContent = `Please enter valid number!`; 
    } else if (num % 2 === 0) {
        message.textContent = "The number " + num + " is an Even Number";
    }
    else {
        message.textContent = "The number " + num + " is an odd Number";
    }
}
