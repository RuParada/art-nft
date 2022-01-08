import React, { useState, useEffect } from "react";
import Web3 from "web3";

//import Web3 from 'web3';
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [mounted, setMounted] = useState(false);

  /* componentWillMount() {
    loadBlockchainData();
  } */

  useEffect(() => {
    setMounted(true);
    loadBlockchainData();
  }, []);

  async function loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    console.log("network: ", network);
  }

  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
