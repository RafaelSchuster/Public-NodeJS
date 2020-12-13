const fs = require('fs-extra');
let message = `
I am a message`;
let path = './test/Ex2SaveFiles.js';
fs.ensureFileSync(path);

let day = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();

function MyLog(msg, relativePath) {
    fs.writeFile(relativePath, msg, err => {
        if (err) console.log('Woops')
        else console.log(`${day}/${month}/${year} ${hour}:${minutes}:${seconds}: ${msg}`);
    });
}
MyLog(message, path);