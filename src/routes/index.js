const attachAuthRoutes = require('./auth');
const attachGuestRoutes = require('./guest');

const attachRoutes = (app) => {
  attachGuestRoutes(app);
  attachAuthRoutes(app);
};

module.exports = {
  attachGuestRoutes,
  attachAuthRoutes,
  attachRoutes,
};
