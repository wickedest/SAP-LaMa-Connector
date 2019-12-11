const path = require('path');
const fs = require('fs');

fs.unlinkSync(path.join(process.env.INIT_CWD, 'swagger', 'sap-lama-api.json'));
fs.unlinkSync(path.join(process.env.INIT_CWD, 'swagger', 'sap-lama-api.png'));
