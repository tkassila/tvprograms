FROM node:14
MAINTAINER tuomas kassila "tuomas.kassila@gmail.com"
RUN apt-get update
RUN apt-get install curl
RUN curl --version
RUN npm --version
WORKDIR "/proxyserver/"
COPY ./proxyserver/server.js /proxyserver/
COPY ./proxyserver/public/* /proxyserver/public/
CMD cd /proxyserver/
RUN git init
RUN npm install express cors --save
# node server.js
EXPOSE 9090
CMD [ "node", "/proxyserver/server.js" ]
