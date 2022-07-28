import pkg from '../package.json';
import * as Vtui from '../packages';

const install = app => {
    console.log(app, Vtui);
    Object.keys(Vtui).forEach(name => app.use(Vtui[name]));
}

export * from '../packages';

export default {
    install,
    ...Vtui,
    version: pkg.version,
    name: pkg.name
}