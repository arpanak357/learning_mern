/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {

    const P1 = new Promise(function(resolve, reject){
        const t = Date.now();
        while(Date.now() - t < milliseconds){
           //keeping thread busy
        }
        resolve();
    });

    console.log("Start");
    
    P1.then(function(){
        console.log("Ended after busy waiting for ", milliseconds, "millisecons");
    })
    return P1;

}

module.exports = sleep;
