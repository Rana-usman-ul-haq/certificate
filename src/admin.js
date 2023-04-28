import{ useState } from 'react';
import './App.css';
import AdminMint from './adminMint';
import NavBar from './NavBar';


function AdminVerify() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
    <div className="App">

  <div className="App">
    <NavBar accounts={accounts} setAccounts={setAccounts} />
    <AdminMint accounts={accounts} setAccounts={setAccounts} />
</div>
<div className="moving-background"> </div>

</div>

  </div>);
}


export default AdminVerify;
