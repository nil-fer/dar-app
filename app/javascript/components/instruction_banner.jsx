import React from 'react';

import InstructionPopup from './instruction_popup';

class InstructionBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      instructionShow: false,
    };
  }

  showInstructionModal = () => {
    this.setState({ instructionShow: true });
  };

  hideInstructionModal = () => {
    this.setState({ instructionShow: false });
  };

  render() {
    return (
      <>
        <div className="banner" onClick={this.showInstructionModal}></div>
        <InstructionPopup
          instructionShow={this.state.instructionShow}
          handleClose={this.hideInstructionModal}
        ></InstructionPopup>
      </>
    );
  }
}

export default InstructionBanner;
