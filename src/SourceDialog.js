import React from 'react';
import Modal from 'react-modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, tomorrowNightEighties } from 'react-syntax-highlighter/styles/hljs';
import perfectionist from 'perfectionist';

Modal.setAppElement('#app')

class SourceDialog extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeDialog();
  }

  render() {
    const { selectedClassName, innerDivNumber } = this.props;
    const htmlString = `<div class="${selectedClassName}">${'<div></div>'.repeat(innerDivNumber)}</div>`;
    console.log(htmlString)
    const cssString = perfectionist.process(this.props.classContent).css;

    const HTMLCodeView = () => {
      return <SyntaxHighlighter language='html' style={tomorrowNightEighties}>{htmlString}</SyntaxHighlighter>;
    }
    const CSSCodeView = () => {
      return <SyntaxHighlighter language='css' style={tomorrowNightEighties}>{cssString}</SyntaxHighlighter>;
    }
    return (
      <Modal
       isOpen
       onRequestClose={this.closeModal}
       className="dialog-content"
       overlayClassName="dialog-overlay"
     >
       <h2 ref={subtitle => this.subtitle = subtitle}>Source Code</h2>
       <div className="source-view">
         <div>HTML</div>
         <HTMLCodeView/>
         <div>CSS</div>
         <CSSCodeView/>
       </div>
       <button className="close-btn" onClick={this.closeModal}>close</button>
     </Modal>
    );
  }
}

export default SourceDialog;
