import React from 'react';

const InstructionPopup = ({ handleClose, instructionShow }) => {
  const showHideClassName = instructionShow ? 'backdrop display-block' : 'backdrop display-none';

  return (
    <div className={showHideClassName}>
      <div className="modal instruction-modal">
        <div>some instructions goes here</div>
        <div className="close-btn" onClick={handleClose}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default InstructionPopup;
