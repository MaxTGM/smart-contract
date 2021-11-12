const ethEnabled = async () => {

  if (window.ethereum) {
    
    window.ethereum.send('eth_requestAccounts').then(() => {
      window.web3 = new Web3(window.ethereum);
      window.web3.eth.getAccounts().then(accounts => {
        console.log(accounts);
      })

      // put form here

    }).catch(err => {
      console.log(err);
    });

  }
}

let metamaskLogin = () => {
  ethEnabled();
}