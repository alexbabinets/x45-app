(function (global) {
  const LOCAL = 'http://localhost:5500/';
  const PROD  = 'https://expressfitness.ca/x45-app/'; // for later
  global.X45 = global.X45 || {};
  global.X45.BASE_URL = LOCAL; // stay on localhost while building
})(window);
