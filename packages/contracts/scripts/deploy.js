const hre = require("hardhat");

async function main() {
  const counterFactory = await hre.ethers.getContractFactory("Counter");
  const counter = await counterFactory.deploy();

  await counter.deployed();

  console.log("deployed to:", counter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
