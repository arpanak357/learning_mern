/* Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

// This was solved after read_file.js
// fs.writeFile(file, data, options, callback);

const fs = require('fs');

let data = "this is a file created for demo purpose";

fs.writeFile("content.txt", data, (err)=>{
    if(err)
        console.log(err);
    else
    {
        console.log("File written successfully. Contents are as follows: ");
        console.log(fs.readFileSync("content.txt", "utf-8"));
    }
});