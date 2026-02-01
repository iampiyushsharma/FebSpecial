const fs = require('fs');
let content = fs.readFileSync('encrypt_secrets.cjs', 'utf8');

// More robust regex
const regex = /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view\?usp=sharing/g;
content = content.replace(regex, 'https://drive.google.com/uc?id=$1');

fs.writeFileSync('encrypt_secrets.cjs', content, 'utf8');
console.log("Links fixed successfully.");
