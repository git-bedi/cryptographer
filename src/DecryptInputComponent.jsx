import React, { useState } from 'react';
import './App.css';
import CryptoJS from 'crypto-js';

const DecryptForm = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');


  const decryptAES = (encryptedBase64, key) => {
   const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key);
    if (decrypted) {
      try {
        const str = decrypted.toString(CryptoJS.enc.Utf8);
        if (str.length > 0) {
          return str;
        } else {
          return 'error 1';
        } 
      } catch (e) {
        return 'error 2';
      }
    }
    return 'error 3';
  };

  const handleSubmit = () => {
    const text = decryptAES(input1, input2);
    setResult(text);
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Input Text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Key"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      {result && <div>Encrypted Output: {result}</div>}
    </div>
  );
};

export default DecryptForm;
