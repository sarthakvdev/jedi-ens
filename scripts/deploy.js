const deploy = async () => {
  console.log("deploy");
};

const runDeploy = async () => {
  try {
    await deploy();
  } catch (error) {
    console.log(error);
  }
};

runDeploy();
