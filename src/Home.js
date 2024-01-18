import React, { useState, useEffect } from "react";
import { ether } from "ethers";
import constants from "./constant";

function Home() {
    const [currentAccount, setCurrentAccount] = useState("");
    const [contractInstance, setContractInstance] = useState("");
    const [status, setStatus] = useState(false);
    const [isWinner, setIsWinner] = useState("");
    //Checking if user is on Metamask network and then connecting to the contract

    useEffect(() => {
        const loadBlockchainData = async () => {
            if (typeof window.ethereum !== "undefined") {
                const provider = new ether.providers.web3Provider(window.ethereum);
                try {
                    const signers = provider.getSigner();
                    const address = await signers.getAddress
                } catch (error) {
                    console.log(error);
                }
            }
            else {
                alert("Please install metamask!");
            }
        };
        loadBlockchainData();

    }, [])

}

export default Home;