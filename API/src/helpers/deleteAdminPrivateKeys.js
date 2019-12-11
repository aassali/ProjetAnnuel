module.exports = (admin) => {
  const adminToReturn = {
    ...admin,
  };
  delete adminToReturn.password;
  return adminToReturn;
};
