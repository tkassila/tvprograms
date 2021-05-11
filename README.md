# preact material app

This app is showing tv and radio programs on a browser. To get json or xml data from servers, it is calling local proxy node server (on port 9090). You can show also descriptions and search a text from canals or programs. The app is also working with screenreaders.
It has two page theme: white and black. It has bigger fonts.

# Developer install

1. On local repo: 
2. Install node, npm, curl apps and preact-cli.
3. give command: deploy.bat or deploy.sh
   (deploy give next commands: npm run build
   and copies build files into proxy dir public)
- 3.ab Add installed curl path into common path in a computer where node server.js should to start
- 3.b cd proxyserver
- 3.c start proxy server: node server.js
   if above deploy is given, then this proxy server can serve also as html normal server and as a proxy server.
- 3.d Start a browser and a load command: localhost:9090 and enter (or url: xxx.com:9090 if it is servers address)
4.  if no deploy.sh comand given, then: give on repo dir: npm run dev and enter
- 4.b  cd proxyserver
- 4.c node server.js
- 4.d  Start a browser and a load command: localhost:8080 and enter (or url: xxx.com:8080 if it is servers address)
5. Select Yle, Telkku, Amppari etc program sources and select a date html link to choose a date of programs to show
6. You can control to how loaded programs are shown and search text from programs data etc  

# User install

1. Download proxyserver.zip 
2. Install node and curl apps.
3. Unzip proxyserver.zip
4. Add installed curl path into common path in a computer where node server.js should to find it
5. cd proxyserver
6. start proxy server: node server.js
   This node server is using curl app, when it is loading html from different tv program html servers!
6. Start a browser and a load command: localhost:9090 and enter
7. Select Yle, Telkku, Amppari etc program sources and select a date html link to choose a date of programs to show
8. You can control to how loaded programs are shown and search text from programs data etc 

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
