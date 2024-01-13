/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/


// 1 


function updateClock()
{
    const curTime = new Date();

    const t = curTime.toLocaleTimeString();
    console.log(t);
}

setInterval(updateClock, 1000);


//2


function updateCounter()
{
    const curTime = new Date();

    const t = curTime.toLocaleTimeString();
    console.log(t);
    setTimeout(updateCounter, 1000);
}

updateCounter();
