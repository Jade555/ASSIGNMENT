1. front-end using vue.js (test)
2. API using Nodejs with Expressjs (test-ws)
3. Mobile Cross platform using ionic framework (test-ionic) - please start project (test-ws) before run mobile project 

start node server in folder test-ws
\$ node server.js

start vuejs in folder test
\$ npm run serve

vuejs with call web service baseurl http://localhost:3000/

#### IF ERROR

Access to XMLHttpRequest at 'http://localhost:3000/q1/1' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

Please Add Extention Cors in Chrome Browser
and add url for allow origin "http://localhost:3000/*"
