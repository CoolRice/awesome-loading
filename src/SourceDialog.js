import React from 'react';
import Modal from 'react-modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, atelierEstuaryDark } from 'react-syntax-highlighter/styles/hljs';

Modal.setAppElement('#app')

class SourceDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: props.modalIsOpen
    };
    this.closeModal = this.closeModal.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.modalIsOpen !== nextProps.modalIsOpen) {
      return {
        modalIsOpen: nextProps.modalIsOpen
      }
    }
    return null;
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const HTMLCodeView = () => {
      const codeString = '(num) => num + 1;console.log(1)';
      return <SyntaxHighlighter language='html' style={atelierEstuaryDark}>{codeString}</SyntaxHighlighter>;
    }
    const CSSCodeView = () => {
      const codeString = '(num) => num + 1;console.log(1)';
      return <SyntaxHighlighter language='css' style={atelierEstuaryDark}>{codeString}</SyntaxHighlighter>;
    }
    return (
      <Modal
       isOpen={this.state.modalIsOpen}
       onRequestClose={this.closeModal}
       className="dialog-content"
       overlayClassName="dialog-overlay"
     >
       <h2 ref={subtitle => this.subtitle = subtitle}>Source Code</h2>
       <div className="source-view">
         <div>div</div>
         <HTMLCodeView/>
         <div>css</div>
         <CSSCodeView/>
       </div>
       <button className="close-btn" onClick={this.closeModal}>close</button>
     </Modal>
    );
  }
}

export default SourceDialog;
