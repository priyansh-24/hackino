import React, { useEffect, useState } from 'react';
import './loader.css'

function LoadingScreen() {
  return (
    <div className="loader-container">
      <svg viewBox="0 0 500 160">
        <text className="text-Box" dy=".32em" x="50%" y="50%" textAnchor="middle">
          Connexus
        </text>
      </svg>
    </div>
  );
}

export default LoadingScreen;
