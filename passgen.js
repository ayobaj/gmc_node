// password-generator.js
const genPass = require('generate-password');

const generateRandomPassword =  () => {
    const password = genPass.generate({
        length: 8,
        symbols: true,
        numbers: true,
        uppercase: true,
        excludeSimilarCharacters: true,
    });
    console.log(password);
}

generateRandomPassword();
