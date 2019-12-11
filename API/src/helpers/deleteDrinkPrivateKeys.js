module.exports = (cocktail) => {
  const cocktailToReturn = {
    ...cocktail,
  };
  delete cocktailToReturn.password;
  return cocktailToReturn;
};
