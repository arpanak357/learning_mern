/* ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/


// const fs = require('fs');

// let data = "this   is   a   file  created for      demo   purpose";

// fs.writeFile("demo.txt", data, (err)=>{
//     if(err)
//         console.log(err);
//     else
//     {
//         console.log("File written successfully. Contents are as follows: ");
//         console.log(fs.readFileSync("demo.txt", "utf-8"));
//     }
// });


const fs = require('fs');

fs.readFile("demo.txt", 'utf-8', (err, data)=>{
    if(err)
    {
        console.error("Encountered error", err);
        return;
    }
    else
    {  
        console.log("Contents before updating: ");
        console.log(fs.readFileSync("demo.txt", "utf-8"));
        const content = data.split(/\s+/).join(" ");

        fs.writeFile("demo.txt", content, 'utf-8', (err)=>{
            if(err)
                console.error("Encountered error", err);
            else
            {
                console.log("File Updated Successfully!");
                console.log("Contents are as follows:");
                console.log(fs.readFileSync("demo.txt", "utf-8"));
            }
        });
    }

});

