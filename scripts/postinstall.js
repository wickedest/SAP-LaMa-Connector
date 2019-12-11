const fs = require('fs');
const path = require('path');
const dest = path.join(process.env.INIT_CWD, 'swagger');
fs.copyFileSync(path.join(__dirname, '..', 'swagger', 'sap-lama-api.json'), dest);
fs.copyFileSync(path.join(__dirname, '..', 'swagger', 'sap-lama-api.png'), dest);
