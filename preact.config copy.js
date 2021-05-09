module.exports = function(config) {
    config.devServer.proxy = [
      {
        // proxy requests matching a pattern:
        path: '/telkku/**',
  
        // where to proxy to:
        target: 'https://telkussa.fi/RSS/Channel/',
  
        // optionally change Origin: and Host: headers to match target:
        changeOrigin: true,
        changeHost: true,
  
        // optionally mutate request before proxying:
        pathRewrite: function(path, request) {
          // you can modify the outbound proxy request here:
          delete request.headers.referer;
  
          // common: remove first path segment: (/api/**)
          return '/' + path.replace(/^\/[^\/]+\//, '');
        },
  
        // optionally mutate proxy response:
        onProxyRes: function(proxyRes, req, res) {
          // you can modify the response here:
          proxyRes.headers.connection = 'keep-alive';
          proxyRes.headers['cache-control'] = 'no-cache';
        }
      },
      {
        // proxy requests matching a pattern:
        path: '/telkkussa/**',
  
        // where to proxy to:
        target: 'https://telkussa.fi/',
  
        // optionally change Origin: and Host: headers to match target:
        changeOrigin: true,
        changeHost: true,
  
        // optionally mutate request before proxying:
        pathRewrite: function(path, request) {
          // you can modify the outbound proxy request here:
          delete request.headers.referer;
  
          // common: remove first path segment: (/api/**)
          return '/' + path.replace(/^\/[^\/]+\//, '');
        },
  
        // optionally mutate proxy response:
        onProxyRes: function(proxyRes, req, res) {
          // you can modify the response here:
          proxyRes.headers.connection = 'keep-alive';
          proxyRes.headers['cache-control'] = 'no-cache';
        }
      },
      {
        // proxy requests matching a pattern:
        path: '/ampparissa/**',
  
        // where to proxy to:
        target: 'https://www.ampparit.com/',
  
        // optionally change Origin: and Host: headers to match target:
        changeOrigin: true,
        changeHost: true,
  
        // optionally mutate request before proxying:
        pathRewrite: function(path, request) {
          // you can modify the outbound proxy request here:
          delete request.headers.referer;
  
          // common: remove first path segment: (/api/**)
          return '/' + path.replace(/^\/[^\/]+\//, '');
        },
  
        // optionally mutate proxy response:
        onProxyRes: function(proxyRes, req, res) {
          // you can modify the response here:
          proxyRes.headers.connection = 'keep-alive';
          proxyRes.headers['cache-control'] = 'no-cache';
        }
      },
      {
        // proxy requests matching a pattern:
        path: '/yle/**',
  
        // where to proxy to:
        target: 'https://external.api.yle.fi/v1/',
  
        // optionally change Origin: and Host: headers to match target:
        changeOrigin: true,
        changeHost: true,
  
        // opC:\Java\project\preact\preacthsl2\preact.config.js..tionally mutate request before proxying:
        pathRewrite: function(path, request) {
          // you can modify the outbound proxy request here:
          delete request.headers.referer;
  
          // common: remove first path segment: (/api/**)
          return '/' + path.replace(/^\/[^\/]+\//, '');
        },
  
        // optionally mutate proxy response:
        onProxyRes: function(proxyRes, req, res) {
          // you can modify the response here:
          proxyRes.headers.connection = 'keep-alive';
          proxyRes.headers['cache-control'] = 'no-cache';
        }
      }
    ];
  };