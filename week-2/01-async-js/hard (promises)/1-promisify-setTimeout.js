/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    const P1 = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Async task is completed");
            resolve();
        }, n*1000);
    })

    P1.then(function(){
        console.log("Promise Consumed");
    })
    return P1;
}

module.exports = wait;
