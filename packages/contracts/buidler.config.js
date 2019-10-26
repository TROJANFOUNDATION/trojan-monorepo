usePlugin("@nomiclabs/buidler-etherscan");

module.exports = {
  solc: {
    version: "0.5.3"
  },
  etherscan: {
    // The url for the Etherscan API you want to use.
    url: "https://api.etherscan.io/api",
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
