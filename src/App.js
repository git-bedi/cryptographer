import './App.css';
import DecryptForm from './DecryptInputComponent';
import EncryptForm from './EncryptInputComponent';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h2>Cryptographer : git-bedi</h2>
      <h3>Encrypt</h3>
        <EncryptForm/>
      <h3>Decrypt</h3>
        <DecryptForm/>
    </div>
    </Router>
  );
}

export default App;
