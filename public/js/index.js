const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);

      console.log(await window.web3.eth.getAccounts());

      return true;
    }
    return false;
}

let metamaskLogin = () => {
    ethEnabled().then(console.log);
}
