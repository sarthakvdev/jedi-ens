const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const domainContractFactory = await hre.ethers.getContractFactory('Domains');
  const domainContract = await domainContractFactory.deploy();
  await domainContract.deployed();
  console.log("Domain contract deployed to", domainContract.address);
  console.log("Domain contract deployed by", owner.address);

  const txn = await domainContract.register("sarthak");
  await txn.wait();

  const domainAddress = await domainContract.getAddress("sarthak");
  console.log("Owner of the domain", domainAddress);

  await domainContract.setRecord("sarthak", "this is my domain now");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch(err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();