import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HelloWorldContract from "./contracts/ExampleContract.json";
import getWeb3 from "./web3";

function App() {
  const [count, setCount] = useState(0);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        const web3Instance = await getWeb3();
        const networkId = await web3Instance.eth.net.getId();
        const deployedNetwork = HelloWorldContract.networks[networkId];
        const contractInstance = new web3Instance.eth.Contract(
          HelloWorldContract.abi,
          deployedNetwork && deployedNetwork.address
        );
        setWeb3(web3Instance);
        setContract(contractInstance);
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const getMessage = async () => {
    try {
      const result = await contract.methods.message().call();
      setMessage(result);
    } catch (error) {
      console.error(error);
    }
  };

  const setMessageValue = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const fromAddress = accounts[0];

      await contract.methods.setMessage("H!!!!!").send({ from: fromAddress });
      getMessage();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setMessageValue()}>
          Set Message
        </button>
        <button onClick={() => getMessage()}>
          Get Message
        </button>
        <p>Message: {message}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
