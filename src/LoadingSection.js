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

  renderLoadingItem(className, number) {
    const divs = [];
    for(let i=0; i<=number -1; i ++) {
      divs.push(<div key={i} />);
    }
    return (
      <div className={className}>
        {divs}
      </div>
    );
  }

  render(){
    const { SourceDialog, modalIsOpen, loadingClassName } = this.state;
    return (
      <section className="loading-section">
         {
           this.renderItem([
             this.renderLoadingItem('three-dots-scale', 3),
             this.renderLoadingItem('three-dots-chase', 3),
             this.renderLoadingItem('three-dots-rotate', 3),
             this.renderLoadingItem('three-dots-jump', 3),
             this.renderLoadingItem('circle-dots-scale', 8),
             this.renderLoadingItem('circle-lines-chase', 3),
             this.renderLoadingItem('five-bars-vertical', 5),
             this.renderLoadingItem('progress-bar', 0),
           ])
         }
         {SourceDialog && <SourceDialog.default modalIsOpen={modalIsOpen} loadingClassName={loadingClassName}/>}
     </section>
    )
  }
}

export default LoadingSection;
