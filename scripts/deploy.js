const main = async () => {
  const MyNftContractFactory = await hre.ethers.getContractFactory('MyNFT');
  const mynftContract = await MyNftContractFactory.deploy();
  await mynftContract.deployed();

  console.log("The Contract address :", mynftContract.address);

  //Calling the function
  let tx = await mynftContract.mintNFT()
  await tx.wait()
  console.log("Successfully Minted NFT#1")



  // Calling another time for fun
  tx = await mynftContract.mintNFT()
  await tx.wait()
  console.log("Successfully Minted NFT#2")

}

const runMain = async () => {
  try {
      await main()
      process.exit(0)
  } catch (error) {
   console.log(error)
   process.exit(1)   
  }
}

runMain()