import React, { Component } from "react";
import ProofsContract from "../build/contracts/Proofs.json";
import getWeb3 from "./utils/getWeb3";
import ProofForm from "./components/ProofForm";
import { Card, Icon, Image } from "semantic-ui-react";

import "./css/oswald.css";
import "./css/open-sans.css";
import "./css/pure-min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.createProof = this.createProof.bind(this);

    this.state = {
      storageValue: 0,
      web3: null,
      inputTitle: "",
      proofs: []
    };
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        });

        // Instantiate contract once web3 provided.
        this.instantiateContract();
      })
      .catch(() => {
        console.log("Error finding web3.");
      });
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */
    const contract = require("truffle-contract");
    const proofs = contract(ProofsContract);
    proofs.setProvider(this.state.web3.currentProvider);

    // Declaring this for later so we can chain functions on SimpleSto  rage.
    var proofsInstance;

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      proofs
        .deployed()
        .then(instance => {
          proofsInstance = instance;
          this.setState({ proofsInstance: proofsInstance, accounts: accounts });
          debugger;
          //return proofsInstance.getProof(0, {from: accounts[0]});
          return proofsInstance.getProofIds({ from: accounts[0] });
        })
        .then(result => {
          // Update state with the result.
          debugger;
          this.setState({ numberOfProofs: result.toNumber() });
          if (result.toNumber() > 0) {
            let promiseArray = [];
            for (var i = 0; i < result.toNumber(); i++) {
              promiseArray.push(proofsInstance.getProof(i));
            }
            return Promise.all(promiseArray);
          }
        })
        .then(result => {
          debugger;
          let proofMap = {
            title: result[0],
            description: result[1],
            image: result[2]
          }
          this.setState({proofs: this.state.proofs.push(proofMap)})
        });
    });

    this.state.web3.eth.filter("latest", function(error, result) {
      if (!error) console.log(result);
    });
  }

  createProof(form) {
    debugger;
    this.state.proofsInstance.createProof(
      form.values.title,
      form.values.description,
      form.values.image,
      { from: this.state.accounts[0] }
    );
  }

  render() {
    console.log(ProofForm);
    let proofs = this.state.proofs; 
    let cards = proofs.map((p, i) => {
      return (
        <Card key={i}>
          <Card.Header>{p.title}</Card.Header>
          <p>{p.image}</p>
          <p>{p.description}</p>
        </Card>
      );
    });
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">
            Proofs!
          </a>
        </nav>
        <main className="container" />
        <div className="centerColumn">
          <Card>
            <Card.Content>
              <ProofForm handleSubmit={this.createProof} />
            </Card.Content>
          </Card>
          {cards}
        </div>
      </div>
    );
  }
}

export default App;
