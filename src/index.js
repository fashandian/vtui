import * as Vtui from '../packages';
import pkg from '../package.json';

const install = app => {
    console.log(app, Vtui);
    Object.keys(Vtui).forEach(name => app.use(Vtui[name]));
}

// if (typeof window !== undefined && window.Vue) {
//     install(window.Vue);
// }

export * from '../packages';

export default {
    install,
    ...Vtui,
    version: pkg.version,
    name: pkg.name
}