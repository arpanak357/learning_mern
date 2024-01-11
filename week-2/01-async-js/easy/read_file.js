/*Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/

// https://www.geeksforgeeks.org/node-js-fs-readfile-method/?ref=lbp

//cd easy  : moving to desired folder
//mkdir content.txt : creating file
//cd content.txt  : moving to file
// npm init -y: to create package.json file

let fs = require('fs');

fs.readFile( 'content.txt', 'utf-8', function(err, data){
    console.log(data);
});

console.log('file is read');