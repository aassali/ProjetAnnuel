module.exports = (commande) => {
  const commandeToReturn = {
    ...commande,
  };
  delete commandeToReturn.password;
  return commandeToReturn;
};
