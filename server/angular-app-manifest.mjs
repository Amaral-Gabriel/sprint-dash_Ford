
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Sprint-Final/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Sprint-Final/login",
    "route": "/Sprint-Final"
  },
  {
    "renderMode": 2,
    "route": "/Sprint-Final/login"
  },
  {
    "renderMode": 2,
    "route": "/Sprint-Final/home"
  },
  {
    "renderMode": 2,
    "route": "/Sprint-Final/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23746, hash: '211d35c68ae41cb9ccec01865f8d117a885a91b90e6814b072256df278c30e46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1142, hash: '80273d6f00f4679b87320ac44149f5c20ceb82aaa5ba12f5702c17c1e6a7f940', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 39697, hash: '41dc8201fd57ca26159c0ec1297fabcb83d7635a4255b3b7bb5f481eb1e07db4', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 47359, hash: '8e4448a79f78603413a6d6dd671dd8bd7e2731084ccc56496f14a859713e2c58', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 39099, hash: 'd46d1a7af71287b9a3dfa7bfed49567b978cea88754f657824b2825277df4c87', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-WXBLT6FQ.css': {size: 250710, hash: '3+ed9U+21/E', text: () => import('./assets-chunks/styles-WXBLT6FQ_css.mjs').then(m => m.default)}
  },
};
