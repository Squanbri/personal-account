/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
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
});

server.get('/auth/check', (req, res) => {
  if (isTokenVerify(req)) {
    return res.json(200);
  } else {
    res.sendStatus(401);
  }
});

server.get('/contacts', (_, res) => {
  try {
    const contacts = dataDb.contacts;
    res.json({contacts});
  } catch (e) {
    console.log(e);
    res.sendStatus(422);
  }
});

server.get('/users', (req, res) => {
  try {
    const users = getUsers(req);
    res.json({users});
  } catch (e) {
    console.log(e);
    res.sendStatus(422);
  }
});

server.post('/users', (req, res) => {
  try {
    addUser(req);
    res.json(201);
  } catch (e) {
    res.sendStatus(422);
  }
});

server.delete('/contacts', (req, res) => {
  try {
    deleteContact(req);
    res.json(200);
  } catch (e) {
    res.sendStatus(422);
  }
});

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
});
  
server.use(router);

server.listen(3004, () => {
  console.log('JSON Server is running');
});

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

function getUsers(req) {
  const searchingUsers = searchUsers(req);

  return searchingUsers.filter((user) => 
    !dataDb.contacts.find(contact => contact.id === user.id)
  );
}

function addUser(req) {
  const userId = req.body.userId;

  const index = dataDb.users.findIndex(user => user.id === userId);

  if (index !== -1) {
    const removedUser = dataDb.users.splice(index, 1);
    dataDb.contacts.push(...removedUser);
    return dataDb.users;
  } 

  throw new Error('Такой пользователь не найден');
}

function deleteContact(req) {
  const userId = req.body.userId;

  const index = dataDb.contacts.findIndex(contact => contact.id === userId);

  if (index !== -1) {
    const removedContact = dataDb.contacts.splice(index, 1);
    dataDb.users.push(...removedContact);
    return dataDb.contacts;
  } 

  throw new Error('Такой пользователь не найден');
}

function searchUsers(req) {
  const search = req.query.search;

  if (search) {
    const reg = new RegExp(search, 'i');

    return dataDb.users.filter(user => reg.test(user.fullName));
  }

  return dataDb.users;
}