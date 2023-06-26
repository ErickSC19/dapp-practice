// eslint-disable-next-line no-undef
const ExampleContract = artifacts.require("ExampleContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ExampleContract", function (/* accounts */) {
  it("should assert true", async function () {
    await ExampleContract.deployed();
    return assert.isTrue(true);
  });
});
