const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('banks.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  if (req.method === 'POST' || req.method === 'DELETE' || req.method === 'PUT' || req.method === 'PATCH') {
    return
  }
  // Continue to JSON Server router
  next()
})

server.use(router);



server.listen(port);