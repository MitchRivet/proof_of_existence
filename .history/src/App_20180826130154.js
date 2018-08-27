import React, { Component } from 'react'
import ProofsContract from '../build/contracts/Proofs.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const proofs = contract(ProofsContract)
    proofs.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleSto  rage.
    var proofsInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      debugger; 
      proofs.deployed().then((instance) => {
        proofsInstance = instance;
        debugger; 
        return proofsInstance.createProof("test", "test", "test" {from: accounts[0]});
        //return proofsInstance.createProof("inital proof", "here is my proof", "eventualImage.jpg", ["first"], {from: accounts[0]});
      }).then((result) => {
        //get proof index 0... want to figure out how to get ALL proofs at init, i.e. return an array of structs 
        debugger; 
        // .call(accounts[0])
        return proofsInstance.get.call(0)
      }).then((result) => {
        // Update state with the result.
        debugger; 
        return this.setState({ proofs: result.c[0] })
      })
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Truffle Box</a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Good to Go!</h1>
              <p>Your Truffle Box is installed and ready.</p>
              <h2>Smart Contract Example</h2>
              <p>If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default).</p>
              <p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
              <p>The stored value is: {this.state.storageValue}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App
