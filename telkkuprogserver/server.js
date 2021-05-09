// include dependencies
var express = require('express');
var proxy = require('http-proxy-middleware');

// simple replace
function logProvider(provider) {
    // replace the default console log provider.
    return require('winston');
}

function logProvider(provider) {
    var logger = new (require('winston').Logger)();

    var myCustomProvider = {
        log: logger.log,
        debug: logger.debug,
        info: logger.info,
        warn: logger.warn,
        error: logger.error
    }
    return myCustomProvider;
}

// proxy middleware options
var options = {
    //    https://api.digitransit.fi/graphql/hsl
    // geocoding/v1/
          target: 'https://telkussa.fi/RSS/Channel/', // target host
//            target: 'https://localhost:8081/', // target host
    changeOrigin: true,               // needed for virtual hosted sites
        pathRewrite: {
//            '^/api/old-path' : '/api/new-path',     // rewrite path
	    //            '^/api/remove/path' : '/path'           // remove base path
            '^/telkku' : '/'           // remove base path
        },
        router: {
            // when request.headers.host == 'dev.localhost:3000',
            // override target 'http://www.example.org' to 'http://localhost:8000'
            'dev.localhost:80' : 'http://localhost:80'
        }
    };

var optionsAmpparissa  = {
        target: 'https://www.ampparit.com/', // target host
        changeOrigin: true,               // needed for virtual hosted sites
        pathRewrite: {
//            '^/api/old-path' : '/api/new-path',     // rewrite path
	    //            '^/api/remove/path' : '/path'           // remove base path
            '^/ampparissa' : '/'           // remove base path
        },
        router: {
            // when request.headers.host == 'dev.localhost:3000',
            // override target 'http://www.example.org' to 'http://localhost:8000'
            'dev.localhost:80' : 'http://localhost:80'
        }
    };

/*
var exampleProxy = proxy('/api', {
    target: 'http://api.digitransit.fi/geocoding/v1/reverse',
    changeOrigin: true,
});
*/

// create the proxy (without context)
var exampleProxy = proxy(options);
var exampleProxyAmpparissa = proxy(optionsAmpparissa);
// mount `exampleProxy` in web server
var app = express();
    app.use('/telkku', exampleProxy);
    app.use('/ampparissa', exampleProxyAmpparissa);
    app.listen(80);
