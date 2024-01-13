/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    const P1 = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Task1 is over");
            resolve();
        }, t*1000);
    })

    P1.then(function(){
        console.log("Promise1 Consumed");
    })
    return P1;
}

function wait2(t) {
    const P1 = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Task2 is over");
            resolve();
        }, t*1000);
    })

    P1.then(function(){
        console.log("Promise2 Consumed");
    })
    return P1;
}

function wait3(t) {
    const P1 = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Task3 is over");
            resolve();
        }, t*1000);
    })

    P1.then(function(){
        console.log("Promise3 Consumed");
    })
    return P1;
}

function calculateTime(t1, t2, t3) {

    const t = Date.now();
    
    // Use Promise.all to wait for all promises to resolve
  return Promise.all([wait1(t1),  wait2(t2),  wait3(t3)]).then(() => {
    const totalTime = Date.now() - t;
    console.log('Entire operation completed in ' + totalTime + ' milliseconds');
    return totalTime;
  });
   

}

module.exports = calculateTime;


/*
'Promise.all' is a method in JavaScript that takes an iterable (usually an array) of promises and returns a single promise. This resulting promise fulfills with an array of fulfillment values when all the promises in the iterable have fulfilled. If any of the promises in the iterable is rejected, the resulting promise is immediately rejected with the reason of the first promise that was rejected.
eg:
const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2'), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Promise 3'), 3000));

const allPromises = Promise.all([promise1, promise2, promise3]);

allPromises
  .then(values => {
    console.log('All promises fulfilled:', values);
  })
  .catch(error => {
    console.error('At least one promise rejected:', error);
  });
*/