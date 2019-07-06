//Create some functions for math operations...
//functions that return values....
function addFunc(first, second){
    return first + second;
}

function subFunc(first, second){
    return first - second;
}

function mulFunc(first, second){
    return first * second;
}

function divFunc(first, second){
    return first / second;
}

function SquareRoot(value) {
    return Math.sqrt(value);//Math is a builtin object of JS to perform Math operations...
}

function square(no) {
    return mulFunc(no, no);//Calling our function inside another function....
}
//function that does not return value
function message(msg){
    console.log(msg);
}