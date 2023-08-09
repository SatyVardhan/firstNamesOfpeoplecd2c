const peopleNames = require("../country/state/city/index");
const getFirstNameFun = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  const firstNames = getFirstNameFun(peopleNames);
  return firstNames;
};
module.exports = getPeopleInCity;
