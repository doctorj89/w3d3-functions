var answer = 0;

// Function Definitions

// 1. Write a function called add that takes two arguments and adds them together, returning the result

function add(calcNumber1, calcNumber2) {
    answer = calcNumber1 + calcNumber2;
    return answer;  
}

// 2. Write a function called subtract that takes two arguments and subtracts them from each other, returning the result

function subtract(calcNumber1, calcNumber2) {
    answer = calcNumber1 - calcNumber2;
    return answer;
}

// 3. Write a function called multiply that takes two arguments and multiplies them other, returning the result

function multiply(calcNumber1, calcNumber2) {
    answer = calcNumber1 * calcNumber2;
    return answer;
}

// 4. Write a function called divide that takes two arguments and divides them from each other, returning the result

function divide(calcNumber1, calcNumber2) {
    answer = calcNumber1 / calcNumber2;
    return answer;
}

function increment(calcNumber1, calcNumber2) {
    answer += 1;
    return answer;
}

function decrement(calcNumber1, calcNumber2) {
    answer -= 1;
    return answer;
}

// Event Handlers
document.querySelector('#calc').addEventListener('click', function(e) {
    var calcFunction = e.target.id,
        number1 = Number(document.querySelector('#number1').value),
        number2 = Number(document.querySelector('#number2').value);

        console.log(calcFunction);
    
    answer = window[calcFunction](number1, number2);

    document.querySelector('#answer').innerHTML = answer;
});