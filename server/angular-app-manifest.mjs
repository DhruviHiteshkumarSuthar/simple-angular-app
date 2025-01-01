
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/simple-angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/simple-angular-app"
  }
],
  assets: {
    'index.csr.html': {size: 519, hash: '90623a5d55305f2f72a2130645a7e60e9f7b1541c346356692f87fd9850afdac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1032, hash: 'b4badc5447d472f9ecb1ada2a07e5d1bf57a4a85d0aebf1d090c9af3f1aef57f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 771, hash: 'c336a0f155d12f14fb2c08e71fef3a158fd57c05da780e6cc92f748e077f69f3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
