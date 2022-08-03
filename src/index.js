import * as Vtui from '../packages';
import pkg from '../package.json';

const install = app => {
    console.log(app, Vtui);
    Object.keys(Vtui).forEach(name => app.use(Vtui[name]));
}

// if (typeof window !== undefined && window.Vue) {
//     install(window.Vue);
// }

const getVersion = () => require('../package.json').version

export * from '../packages';

export default {
    install,
    ...Vtui,
    getVersion,
    version: getVersion(),
    name: pkg.name
}