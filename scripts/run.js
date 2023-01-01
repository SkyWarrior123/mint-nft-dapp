const main = async () => {
    const MyNftContractFactory = await hre.ethers.getContractFactory('MyNft');
    const mynftContract = await MyNftContractFactory.deploy();
    await mynftContract.deployed();

    console.log("The Contract address :", mynftContract.address);

    //Calling the function
    let tx = await mynftContract.mintNft()
    await tx.wait()

    // Calling another time for fun
    tx = await mynftContract.mintNft()
    await tx.wait()
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