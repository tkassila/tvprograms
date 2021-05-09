# preact material app

This app is showing tv and radio programs on a browser. To get json or xml data from servers, it is calling local proxy server (on port 9090). You can show also descriptions and search a text from canals or programs. The app is also for visual handicapp people. Has bigger fonts, can be used with screen readers, white and black colors to change.

1. On local repo: 
2. Install node and npm apps.
3. give command: deploy.bat or deploy.sh
4. (deploy give next commands: npm run build
5. and copies build files into proxy dir public)
6. cd proxyserver
7. start proxy server: node server.js
8. if above deploy is given, then this proxy server can serve as html normal server.
9. Start a browser and git a load command: localhost:8080 and enter.

Super performant `Material` app for preact world using [preact-material-components](https://github.com/prateekbh/preact-material-components)

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
