module.exports = (produit) => {
  const produitToReturn = {
    ...produit,
  };
  delete produitToReturn.password;
  return produitToReturn;
};
