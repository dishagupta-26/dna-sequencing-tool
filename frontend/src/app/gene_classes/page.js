"use client";
import React, { useState } from "react";
import axios from "axios";
import Slider from "../components/slider";
import GeneClass from "../components/geneclass";

const InputForm = ({ onSubmit }) => {
  const [sequence, setSequence] = useState("");
  const [classificationResult, setClassificationResult] = useState(null);
  const [accuracy, setAccuracy] = useState("");
  const [confMatrix, setConfMatrix] = useState(null); // Added state for confusion matrix
  const [isLoading, setIsLoading] = useState(false); // Added state for loading indicator

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      setSequence(fileContent);
    };
    reader.readAsText(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.post("http://localhost:5001/classify_gene", {
        sequence: sequence,
      });
      console.log(response.data);
      setAccuracy(response.data.accuracy);
      setConfMatrix(response.data.confusion_matrix); // Set confusion matrix state
      const { predicted_class, accuracy, confusion_matrix } = response.data;
      setClassificationResult(predicted_class);
      onSubmit(predicted_class);
    } catch (error) {
      console.error("Error classifying sequence:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after receiving response
    }
  };

  return (
    <div className="p-8">
      <div className="m-8 items-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-500 text-left">
          What is Gene Classification?
        </h1>
        <p className="text-xl">
          Gene classification refers to the process of categorizing genes based
          on their functional properties, biological roles, or associations with
          specific phenotypes or diseases. This classification is typically
          performed using computational methods, machine learning algorithms, or
          biological knowledge to analyze gene expression data, genetic
          sequences, or other genomic information.
        </p>

        <div className="flex">
          <div className="w-2/3">
            <br />
            <h1 className="text-3xl font-bold text-blue-500 text-left">
              How to use our Gene Classification Model?
            </h1>
            <p className="text-xl">
              <div class="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full text-center md:text-justify m-6 ">
                  <h1 class="text-2xl font-bold text-blue-500 shadow-xl">
                    1. Find a Human DNA Sequence File:
                  </h1>
                  <p>
                    You can obtain human DNA sequence data from various sources
                    such as public databases like NCBI GenBank or Ensembl.
                    Alternatively, you can generate your own DNA sequence data
                    using laboratory techniques like PCR amplification and
                    sequencing.
                  </p>
                  <br></br>

                  <h1 class="text-2xl font-bold text-blue-500 shadow-xl">
                    2. Ensure the File Format and Format Validation:
                  </h1>

                  <p>
                    Once you have the DNA sequence file, ensure that it is in a
                    compatible format, such as FASTA or plain text. Check that
                    the file is well-formatted and does not contain any errors
                    or inconsistencies.
                  </p>
                  <br></br>

                  <h1 class="text-2xl font-bold text-blue-500 shadow-xl">
                    3. Load the File by Browsing Your System:
                  </h1>
                  <p>
                    Click on the button to open a file browsing dialog on your
                    system. Browse to the location where the DNA sequence file
                    is stored on your computer. Select the file by clicking on
                    it and then click "Open". The logistic regression model is
                    then trained on these transformed feature vectors.
                  </p>
                  <br></br>
                  <h1 class="text-2xl font-bold text-blue-500 shadow-xl">
                    4. Implement the Predict Functionality:
                  </h1>
                  <p>
                    Once you uploads the DNA sequence file, click on the
                    "Predict" button that triggers the model. After the
                    prediction is complete, the results are displayed.
                  </p>
                </div>
              </div>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 border rounded-xl w-1/3">
            <h1 className="text-4xl font-bold p-4 text-center shadow-xl">
              Gene Classification
            </h1>

            <input
              type="file"
              accept=".txt"
              onChange={handleFileChange}
              className="w-full mt-4 p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
            />

            <button
              type="submit"
              className="block w-full mt-4 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-600 border rounded-md"
            >
              {isLoading ? "Processing..." : "Predict"} {/* Button text changes based on loading state */}
            </button>
            <br />

            <img src="gene.jpg" className="rounded-xl" />
            {classificationResult !== null && (
              <div className="mt-4 text-gray-300 font-semibold border rounded-3xl p-8 text-xl">
                <h3>Predicted Class: {classificationResult}</h3>
              </div>
            )}
          </form>
        </div>
      </div>



      <div className="flex">
 
      <div className="p-8 w-2/3">
      <Slider />
    </div>

       
        <div className="p-8 w-4/5 space-y-6">
          <h1 className="text-4xl font-bold text-blue-400 text-left ">
            Learn More about the Gene Classes
          </h1>

          <GeneClass />
        </div>

     


      </div>
    </div>
  );
};

export default InputForm;
