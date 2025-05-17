
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sprint-dash_Ford/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/sprint-dash_Ford/login",
    "route": "/sprint-dash_Ford"
  },
  {
    "renderMode": 2,
    "route": "/sprint-dash_Ford/login"
  },
  {
    "renderMode": 2,
    "route": "/sprint-dash_Ford/home"
  },
  {
    "renderMode": 2,
    "route": "/sprint-dash_Ford/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23750, hash: 'b73e7fb8d5922ffcedcfe066ac15fa7d38670e584ea44abb96bb8a875ba4cf4e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1146, hash: '158e1e5362fdb310664578105452b730d69fed3a7219082918fd9de80a157e0c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 39103, hash: '846d7c2a77e0f3a0cc305df7857e10e25b1597a38ca3f9d6691eced6e454c222', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 39701, hash: 'e20bb6625af2a2a7e6573f362c41f504a9bb25333c688519562c0b4d4d8ad755', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 47363, hash: '77381d8da463636799bef1e63d584aa2bad40030efbcd4fb13d54cd169ea99de', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-WXBLT6FQ.css': {size: 250710, hash: '3+ed9U+21/E', text: () => import('./assets-chunks/styles-WXBLT6FQ_css.mjs').then(m => m.default)}
  },
};
