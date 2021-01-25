const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://svp-back-end-final.herokuapp.com',
      changeOrigin: true,
    })
  );
};