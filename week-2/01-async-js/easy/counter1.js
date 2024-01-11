// Create a counter in JavaScript
//It should go up as time goes by in intervals of 1 second

//This means to say that create something like timer which will be updated every second

let counter = 0;

function updateCounter()
{
    counter++;

    console.log(counter);
}

setInterval(updateCounter, 1000);

/*
Prototype of the function above ---
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, /* …,  argN)
*/

