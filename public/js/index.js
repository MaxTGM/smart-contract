const ethEnabled = async () => {

  if (window.ethereum) {
    
    window.ethereum.send('eth_requestAccounts').then(() => {
      window.web3 = new Web3(window.ethereum);
      window.web3.eth.getAccounts().then(accounts => {
        // console.log(accounts);
        window.location = "/form"
      })

    }).catch(err => {
      console.log(err);
      alert('Please enable Metamask');
    });

  } else {
    alert('Please use a Web3 supported browser/extension');
  }
}

let metamaskLogin = () => {
  ethEnabled();
}