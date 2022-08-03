import * as Vtui from '../packages';

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
    version: require('../package.json').version,
    name: require('../package.json').name
}