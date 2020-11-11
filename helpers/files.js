const path = require('path')

class Files {
    constructor() {
        this.nameFile = 'test.txt';
        this.path =path.resolve('testData/' + this.nameFile);
    }
}

module.exports = Files;
