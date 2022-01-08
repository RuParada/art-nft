import React from "react";
//import Web3 from "web3";
import { useMetaMask } from "metamask-react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { status, connect, account } = useMetaMask();

  if (status === "initializing")
    return <div>Synchronisation with MetaMask ongoing...</div>;

  if (status === "unavailable") return <div>MetaMask not available :(</div>;

  if (status === "notConnected")
    return <button onClick={connect}>Connect to MetaMask</button>;

  if (status === "connecting") return <div>Connecting...</div>;

  if (status === "connected")
    return (
      <div className="container-fluid">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Connected account: {account}</h1>
        </header>
      </div>
    );
}

export default App;
