"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const ModelPerformance = () => {
  const [showMetrics, setShowMetrics] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const accuracy = 0.984;
  const precision = 0.984;
  const f1Score = 0.987;
  const recall = 0.996;

  const handleViewPerformance = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowMetrics(true);
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed
  };

  return (
    <div className="p-8">  
    <div className='p-8 w-full'>
    <h1 className="text-4xl font-bold mb-4 text-blue-500 text-justify">
    Model Performance
  </h1>
      <div className="mb-4">
        <button 
          onClick={handleViewPerformance}
          className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        >
          View Model Performance
        </button>
      </div>
      {isLoading && (
        <p className="text-gray-500">Processing...</p>
      )}
      {showMetrics && !isLoading && (
        <div>
          <h3 className="text-lg font-bold mb-2">Model Performance Metrics</h3>
          <table className="rounded-md mb-4 items-wrap">
            <thead>
              <tr>
                <th className="px-4 py-2">Predicted</th>
                <th className="px-4 py-2">0</th>
                <th className="px-4 py-2">1</th>
                <th className="px-4 py-2">2</th>
                <th className="px-4 py-2">3</th>
                <th className="px-4 py-2">4</th>
                <th className="px-4 py-2">5</th>
                <th className="px-4 py-2">6</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Actual 0</td>
                <td className="px-4 py-2">99</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Actual 1</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">104</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Actual 2</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">78</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Actual 3</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">124</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Actual 4</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">143</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">5</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Actual 5</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">51</td>
                <td className="px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Actual 6</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">263</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p className="mb-1">Accuracy: {accuracy}</p>
            <p className="mb-1">Precision: {precision}</p>
            <p className="mb-1">F1 Score: {f1Score}</p>
            <p className="mb-1">Recall: {recall}</p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ModelPerformance;
