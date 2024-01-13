/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {

    const P1 = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Wait 1 over");
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
            console.log("Wait 2 over");
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
            console.log("Wait 3 over");
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

  // Sequentially call the functions in order
  return wait1(t1).then(() => wait2(t2))
                  .then(() => wait3(t3))
                  .then(()=>{
                        const totalTime = Date.now() - t;
                        console.log('Entire operation completed in ' + totalTime + ' milliseconds');
                        return totalTime;
            });
        }


module.exports = calculateTime;
