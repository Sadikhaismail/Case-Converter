import React, { useState } from 'react';
import './Case.css';

function CaseConverter() {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [resultText, setResultText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeToType, setTimeToType] = useState(0);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);
    setTimeToType(words.length * 0.4);
  };

  const convertToUpperCase = (text) => {
    return text.toUpperCase();
  };

  const convertToLowerCase = (text) => {
    return text.toLowerCase();
  };

  const convertToTitleCase = (text) => {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const convertToSentenceCase = (text) => {
    return text.replace(/(^\w{1}|\.\s+\w{1})/g, (match) => match.toUpperCase());
  };

  const convertToAlternatingCase = (text) => {
    let convertedText = '';
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        convertedText += text[i].toUpperCase();
      } else {
        convertedText += text[i].toLowerCase();
      }
    }
    return convertedText;
  };

  const handleConvert = (converter) => {
    let result;
    switch (converter) {
      case 'uppercase':
        result = convertToUpperCase(inputText);
        break;
      case 'lowercase':
        result = convertToLowerCase(inputText);
        break;
      case 'titlecase':
        result = convertToTitleCase(inputText);
        break;
      case 'sentencecase':
        result = convertToSentenceCase(inputText);
        break;
      case 'alternatingcase':
        result = convertToAlternatingCase(inputText);
        break;
      default:
        result = inputText;
    }
    setConvertedText(result);
    setResultText(result);
  };

  return (
    <div className="case-converter-container">
      <div className="text-converter">
        <h2>Text Converter</h2>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text here..."
          className="input-textarea"
          rows={5}
          cols={50}
        />
        <br />
        <button onClick={() => handleConvert('uppercase')} className="convert-button">Uppercase</button>
        <button onClick={() => handleConvert('lowercase')} className="convert-button">Lowercase</button>
        <button onClick={() => handleConvert('titlecase')} className="convert-button">Title Case</button>
        <button onClick={() => handleConvert('sentencecase')} className="convert-button">Sentence Case</button>
        <button onClick={() => handleConvert('alternatingcase')} className="convert-button">Alternating Case</button>
      </div>
      <div className="result">
        <h2>Result</h2>
        <textarea
          value={resultText}
          onChange={() => {}}
          className="result-box input-textarea"
          rows={5}
          cols={50}
        />
        <p>Total Number of Words: {wordCount}</p>
        <p>Time to Type: {timeToType.toFixed(1)} seconds</p>
      </div>
    </div>
  );
}

export default CaseConverter;
