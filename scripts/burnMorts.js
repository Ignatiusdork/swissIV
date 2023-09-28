const hre = require("hardhat");
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js");

/**
 * Sending a shielded transaction to the Swisstronik blockchain.
 *
 * @param {object} signer - The signer object for sending the transaction.
 * @param {string} destination - The address of the contract to interact with.
 * @param {string} data - Encoded data for the transaction.
 * @param {number} value - Amount of value to send with the transaction.
 *
 * @returns {Promise} - The transaction object.
*/

const CONTRACT_ADDRESS = "0x63c6b6526F517da86b7b3738F5B6670da1dE372B";
const NUMBER = 10;

const sendShieldedTransaction = async (signer, destination, data, value) => {
    // Get the RPC link from the network configuration
    const RPC_URL = hre.network.config.url;

    // Encrypt transaction data
    const [encryptedData] = await encryptDataField(RPC_URL, data);

    // Construct and sign transaction with encrypted data
    return await signer.sendTransaction({
        from: signer.address,
        to: destination,
        data: encryptedData,
        value,
    });
}

async function main() {
    const [signer] = await hre.ethers.getSigners();
    const contractFactory = await hre.ethers.getContractFactory("MORT");
    const contract = contractFactory.attach(CONTRACT_ADDRESS);
    const burnTxn = await sendShieldedTransaction(signer, CONTRACT_ADDRESS, contract.interface.encodeFunctionData("burn", [NUMBER]), 0);
    await burnTxn.wait();
    console.log("Transaction Receipt: ", burnTxn);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})