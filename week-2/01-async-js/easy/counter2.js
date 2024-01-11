// Counter without setInterval
//Without using setInterval, try to code a counter in Javascript.

//Here we will code a timer, something that we did in last program/file, but without setInterval

let counter = 0;

function updateCounter()
{
    counter++;

    console.log(counter);
    setTimeout(updateCounter, 1000);
}

updateCounter();



/*
setTimeout:
    It executes a function or a piece of code once after a specified delay.
    Syntax: setTimeout(callback, delay);

setInterval:

    It repeatedly executes a function or a piece of code at a specified interval.
    Syntax: setInterval(callback, delay);
*/
