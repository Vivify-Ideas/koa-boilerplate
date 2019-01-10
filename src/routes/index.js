const jwt = require('koa-jwt');
const attachAuthRoutes = require('./auth');
const attachGuestRoutes = require('./guest');
const { jwtSecret } = require('./../config');

const attachRoutes = (app) => {
  attachGuestRoutes(app);
  app.use(jwt({ secret: jwtSecret })); // everything after this line is auth only
  attachAuthRoutes(app);
};

module.exports = {
  attachGuestRoutes,
  attachAuthRoutes,
  attachRoutes,
};
