import React from 'react';
import Modal from 'react-modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, tomorrowNightEighties } from 'react-syntax-highlighter/styles/hljs';
import loadingCSS from './loadingCSS';

Modal.setAppElement('#app')

class SourceDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: props.modalIsOpen,
      loadingClassName: props.loadingClassName,
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
    const htmlString = loadingCSS[this.state.loadingClassName]['htmlString'];
    const cssString = loadingCSS[this.state.loadingClassName]['cssString'];

    const HTMLCodeView = () => {
      return <SyntaxHighlighter language='html' style={tomorrowNightEighties}>{htmlString}</SyntaxHighlighter>;
    }
    const CSSCodeView = () => {
      return <SyntaxHighlighter language='css' style={tomorrowNightEighties}>{cssString}</SyntaxHighlighter>;
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
