const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/v1/auth/google', {
      target: 'http://localhost:5000',
    })
  );
};

// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware(
//       '/api/v1/auth/google',
//       { target: 'http://localhost:5000/' },
//       '/api/*',
//       {
//         target: 'http://localhost:5000/',
//       }
//     )
//   );
// };
