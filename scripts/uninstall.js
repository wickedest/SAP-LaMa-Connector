'use strict'

var shell = require('shelljs');

var filesToRemove = ['./swagger/sap-lama-api.json', './swagger/sap-lama-api.png']

var swaggerDir = process.env.INIT_CWD + '/swagger'

// shell.set('-v');

//shell.cd(swaggerDir);

shell.rm(filesToRemove);
