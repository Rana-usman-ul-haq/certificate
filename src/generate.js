import{ useState } from 'react';
import './App.css';
import GenMint from './generateMint';
import NavBar from './NavBar';


function GenerateCert() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
    <div className="App">

  <div className="App">
    <NavBar accounts={accounts} setAccounts={setAccounts} />
    <GenMint accounts={accounts} setAccounts={setAccounts} />
</div>
<div className="moving-background"> </div>

</div>

  </div>);
}


export default GenerateCert;
