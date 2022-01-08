import React, { Component } from 'react'
import Web3 from 'web3'
import logo from "./logo.svg"
import "./App.css"
//import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'
//import TodoList from './TodoList'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
  }


  render() {
    return (
      <div>
        <div className="container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hello world!</h1>
          </header>
        </div>
      </div>
    );
  }
}


export default App;