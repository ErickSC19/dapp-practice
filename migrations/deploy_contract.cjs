// eslint-disable-next-line no-undef
const SimpleContract = artifacts.require("SimpleContract");

module.exports = function (deployer) {
  deployer.deploy(SimpleContract);
}
