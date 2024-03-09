const { isUtf8 } = require('buffer');

const fs = require('fs');


fs.writeFile('welcome.txt', 'Hello', (err) => {
    if (err) throw err;
    console.log('File "welcome.txt" has been created')
});

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})