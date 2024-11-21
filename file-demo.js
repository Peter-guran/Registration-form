const fs = require("fs").promises;

async function readFile(){
    const data = await fs.readFile("file.txt", "utf8");
    console.log(data);
}

readFile();