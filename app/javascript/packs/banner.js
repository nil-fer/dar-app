import ReactDOM from 'react-dom';
import React from 'react';

import InstructionBanner from '../components/instruction_banner';

document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('.react-instructions-banner');

  ReactDOM.render(<InstructionBanner />, banner);
});
