const pkg = require('../package.json');

const install = app => {
    console.log(app);
}

export default {
    install,
    version: pkg.version,
    name: pkg.name
}