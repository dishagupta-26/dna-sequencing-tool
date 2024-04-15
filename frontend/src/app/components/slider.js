"use client";

import React, { useState } from "react";


const Slider = () => {
  return (
    <div className="carousel carousel-center h-2/6 bg-neutral rounded-xl border">
    <div className="carousel-item p-4">
      <img src="slide/gpcr.jpg" className="rounded-box" />
    </div> 
    <div className="carousel-item">
      <img src="slide/ion_channel.jpg" className="rounded-box" />
    </div> 
    <div className="carousel-item">
      <img src="slide/synthases.jpg" className="rounded-box" />
    </div> 
    <div className="carousel-item">
      <img src="slide/synthetases.jpg" className="rounded-box" />
    </div> 
    <div className="carousel-item">
    <img src="slide/thyrosine_phosphate.jpg" className="rounded-box" />
  </div>
  <div className="carousel-item">
  <img src="slide/transcription_factors.jpg" className="rounded-box" />
</div>
<div className="carousel-item">
<img src="slide/tyrosine_kinases.jpg" className="rounded-box" />
</div>
  </div>
  );
};

export default Slider;
