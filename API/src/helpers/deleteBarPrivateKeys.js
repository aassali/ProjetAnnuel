const jwtUtils = require('../../utils/jwt.utils');

module.exports = (bar) => {
  const barToReturn = {
    ...bar,
    //'token': jwtUtils.generateTokenForBar(barToReturn)
  };
  delete barToReturn.password;
  return barToReturn;
};
