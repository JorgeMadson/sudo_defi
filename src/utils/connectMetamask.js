export default async function ConnectMetamask() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      return accounts[0];
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
      return ''; // You can choose to handle the error differently
    }
  } else {
    return '';
  }
}
