const ethEnabled = async () => {

  if (window.ethereum) {
    
    window.ethereum.send('eth_requestAccounts').then(() => {
      window.web3 = new Web3(window.ethereum);
      window.web3.eth.getAccounts().then(accounts => {
        console.log(accounts);
      })

      // put form here
      Swal.fire({
        title: 'Profile Creation',
        html: `<input type="text" id="name" class="swal2-input" placeholder="First Name">
        <input type="date" id="birthdate" class="swal2-input" placeholder="Birth Date">
        <input type="text" id="country" class="swal2-input" placeholder="Country">`,
        confirmButtonText: 'Next',
        focusConfirm: false,
        allowOutsideClick:false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#name').value
          const password = Swal.getPopup().querySelector('#country').value
          if (!name || !country) {
            Swal.showValidationMessage(`Please enter the information`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        Swal.fire(`
          Login: ${result.value.login}
          Password: ${result.value.password}
        `.trim())
      })

    }).catch(err => {
      console.log(err);
    });

  }
}

let metamaskLogin = () => {
  ethEnabled();
}