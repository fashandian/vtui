import pkg from '../package.json';
import Button from '../packages/button';

const install = app => {
    console.log(app);
    app.use(Button);
}

export default {
    install,
    Button,
    version: pkg.version,
    name: pkg.name
}