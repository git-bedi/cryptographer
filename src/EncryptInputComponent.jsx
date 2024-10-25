import React, { useState } from 'react';
import './App.css';
import CryptoJS from 'crypto-js';

const EncryptForm = () => {
  const [input1, setInput1] = useState(''); // Text to encrypt
  const [input2, setInput2] = useState(''); // Password
  const [result, setResult] = useState('');

  const encryptAES = (text, password) => {
    return CryptoJS.AES.encrypt(text, password).toString();
  };

  const handleSubmit = () => {
    const encryptedText = encryptAES(input1, input2);
    setResult(encryptedText);
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

export default EncryptForm;
