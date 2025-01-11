
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/demo-proj/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/demo-proj"
  }
],
  assets: {
    'index.csr.html': {size: 511, hash: '5afc391dd31103f3bca9bc30da87f97406c91a3036e31590b973f6fec314c5a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '2125ef109859d3e1e9212ae4dcdf49f478b1548e648f3017deffba8ce54b8edb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 658, hash: '00c61fbdff880622a6d5ccced75d8d89c131f4377a65db5d78dd8077fa8f9cfe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
