"use client"
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [modelParams, setModelParams] = useState(null);

  const handleTrainClick = async () => {
    try {
      // Sample training data (replace with your actual data)
      const X = ['ATGCATGC', 'TGCATGCA', 'GCATGCAT'];
      const y = ['label1', 'label2', 'label1'];

      const response = await axios.post('http://localhost:5000/train', { X, y });
      setModelParams(response.data);
    } catch (error) {
      console.error('Error training the model:', error);
    }
  };

  return (
    <div>
      <button onClick={handleTrainClick}>Train Model</button>
      {modelParams && (
        <div>
          <h2>Model Parameters:</h2>
          <p>Accuracy: {modelParams.accuracy}</p>
          <p>Precision: {modelParams.precision}</p>
          <p>Recall: {modelParams.recall}</p>
          <p>F1 Score: {modelParams.f1_score}</p>
          <h2>Confusion Matrix:</h2>
          <table>
            <tbody>
              {modelParams.confusion_matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
