import React from 'react';

class LoadingSection extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }
  renderItem(fragments) {
    return fragments.map((fragment, index) =>
      <div onClick={this.openModal.bind(this, fragment.props.className)} key={index} className="col"><div className="content">{fragment}</div></div>)
  }

  openModal(loadingClassName) {
    import(/* webpackChunkName: "sourceDialog" */ './SourceDialog').then(SourceDialog => {
      this.setState({ SourceDialog, modalIsOpen: true, loadingClassName });
    });
  }

  render(){
    const { SourceDialog, modalIsOpen, loadingClassName } = this.state;
    return (
      <section className="loading-section">
         {
           this.renderItem([
             <div className="three-dots-scale"><div/><div/><div/></div>,
             <div className="three-dots-chase"><div/><div/><div/></div>,
             <div className="three-dots-rotate"><div/><div/><div/></div>,
             <div className="three-dots-jump"><div/><div/><div/></div>,
             <div className="circle-dots-scale"><div/><div/><div/><div/><div/><div/><div/><div/></div>,
             <div className="circle-lines-chase"><div/><div/><div/></div>,
             <div className="three-dots-jump"><div/><div/><div/></div>,
             <div className="three-dots-jump"><div/><div/><div/></div>,
             <div className="three-dots-jump"><div/><div/><div/></div>,
             <div className="three-dots-jump"><div/><div/><div/></div>,
             <div className="three-dots-jump"><div/><div/><div/></div>,
             <div className="three-dots-jump"><div/><div/><div/></div>,
             <div className="three-dots-jump"><div/><div/><div/></div>,
           ])
         }
         {SourceDialog && <SourceDialog.default modalIsOpen={modalIsOpen} loadingClassName={loadingClassName}/>}
     </section>
    )
  }
}

export default LoadingSection;
