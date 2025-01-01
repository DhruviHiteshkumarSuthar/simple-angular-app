
export default {
  basePath: '/simple-angular-app/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
