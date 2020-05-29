import React from 'react';
import ReactDOM from 'react-dom';


import InstructionBanner from '../components/instruction_banner';

document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('.react-instructions-banner');

  ReactDOM.render(<InstructionBanner />, banner);
});
