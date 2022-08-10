// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/API/mock/db.json');
const middlewares = jsonServer.defaults();
const dataDb = JSON.parse(fs.readFileSync('./src/API/mock/db.json', 'utf-8'));

server.use(middlewares);
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.post('/auth/login', (req, res) => {
  if (isAuthorized(req)) {
    return res.json({token: 'token'});
  } else {
    res.sendStatus(401);
  }
})

server.get('/auth/check', (req, res) => {
  if (isTokenVerify(req)) {
    return res.json(200);
  } else {
    res.sendStatus(401);
  }
})

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    return res.sendStatus(401);
  }

  try {
    isTokenVerify(req);
    next();
  } catch (e) {
    res.sendStatus(401);
  }
})
  
server.use(router);

server.listen(3004, () => {
  console.log('JSON Server is running');
})

function isAuthorized(req) {
  const { email, password } = req.body;
  
  const user = dataDb.users
    .find(user => 
      user.email === email 
      && user.password === password
    );

  return user !== undefined;
}

function isTokenVerify(req) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    
    if (token === 'token') {
      return true;
    }
  } catch (e) {
    return false;
  }
}