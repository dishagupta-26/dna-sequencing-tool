"use client";

import React, { useState } from "react";
import Link from "next/link";

const GeneClass = () => {
  return (
    <div className="space-y-1">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        1. G Protein-Coupled Receptors (GPCRs)
        </div>
        <div className="collapse-content">
          <p>GPCRs are a large family of cell surface receptors involved in signal transduction. They play crucial roles in sensing external stimuli such as hormones, neurotransmitters, and sensory signals, and they regulate various physiological processes including neurotransmission, hormone secretion, and sensory perception.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          2. Tyrosine Kinase
        </div>
        <div className="collapse-content">
          <p>Tyrosine kinases are enzymes that phosphorylate tyrosine residues in target proteins, regulating cellular signaling pathways. They play critical roles in cell growth, differentiation, and survival, and they are implicated in various diseases including cancer, autoimmune disorders, and developmental disorders.
          </p>
        </div>
      </div>
      
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        3. Tyrosine Phosphatase
        </div>
        <div className="collapse-content">
          <p>Tyrosine phosphatases are enzymes that dephosphorylate tyrosine residues in target proteins, counteracting the actions of tyrosine kinases and modulating cellular signaling. They play important roles in regulating cell cycle progression, metabolism, and immune responses, and they are implicated in diseases such as cancer and diabetes.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">
      4. Synthetase
      </div>
      <div className="collapse-content">
        <p>Synthetases are enzymes that catalyze the formation of new chemical bonds, typically by combining two molecules to form a larger molecule. They are involved in various biosynthetic pathways including amino acid, nucleotide, and lipid synthesis, playing essential roles in cellular metabolism and homeostasis.
        </p>
      </div>
    </div>

    <div className="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium">
    5. Synthase
    </div>
    <div className="collapse-content">
      <p>Synthases are enzymes that catalyze the synthesis of specific compounds without the direct involvement of ATP or other high-energy molecules. They are involved in various metabolic pathways including the synthesis of complex molecules such as polysaccharides, lipids, and secondary metabolites.
      </p>
    </div>
  </div>


  <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">
  6. Ion Channel Protein
  </div>
  <div className="collapse-content">
    <p>Ion channel proteins are transmembrane proteins that facilitate the selective transport of ions across cell membranes. They play crucial roles in electrical signaling, membrane potential regulation, and ion homeostasis in cells, influencing processes such as muscle contraction, neuronal excitability, and hormone secretion.
    </p>
  </div>
</div>


<div className="collapse collapse-arrow bg-base-200">
<input type="radio" name="my-accordion-2" />
<div className="collapse-title text-xl font-medium">
7. Transcription Factor
</div>
<div className="collapse-content">
  <p>Transcription factors are proteins that regulate gene expression by binding to specific DNA sequences and modulating the activity of RNA polymerase. They play critical roles in controlling the expression of target genes involved in development, differentiation, and response to environmental stimuli.</p>
</div>
</div>

    
  </div>







    
  );
};

export default GeneClass;
