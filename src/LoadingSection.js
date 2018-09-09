import React from 'react';

class LoadingSection extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.closeDialog = this.closeDialog.bind(this);
  }
  renderItem(fragments) {
    return fragments.map((fragment, index) =>
      <div onClick={this.openModal.bind(this, fragment.props.className, fragment.props.innerdivnumber)} key={index} className="col">
        <div className="content">{fragment}
        </div>
      </div>
    );
  }

  /**
   * getStyle - get style content by class name for source code dialog
   *
   * @param  {type} className class name
   * @return {type}           return style content
   */
  getStyle(className) {
      let result = '';
      var styleSheets = window.document.styleSheets;
      var styleSheetsLength = styleSheets.length;
      for(var i = 0; i < styleSheetsLength; i++){
          var classes = styleSheets[i].rules || styleSheets[i].cssRules;
          if (!classes)
              continue;
          var classesLength = classes.length;
          for (var x = 0; x < classesLength; x++) {
              // CSSStyleRule
              if (classes[x].selectorText && classes[x].selectorText.includes(`.${className}`)) {
                  if(classes[x].cssText){
                      result += classes[x].cssText;
                  }
              }
              // CSSKeyframesRule
              if (classes[x].name && classes[x].name.includes(className) && classes[x].cssText) {
                result += classes[x].cssText;
              }
          }
      }
      return result;
  }

  openModal(selectedClassName, innerDivNumber) {
    import(/* webpackChunkName: "sourceDialog" */ './SourceDialog').then(SourceDialog => {
      this.setState({ SourceDialog, modalIsOpen: true, selectedClassName, innerDivNumber, selectedClassContent: this.getStyle(selectedClassName) });
    });
  }

  renderLoadingItem(className, innerDivNumber) {
    const divs = [];
    for(let i=0; i<=innerDivNumber -1; i ++) {
      divs.push(<div key={i} />);
    }
    return (
      <div className={className} innerdivnumber={innerDivNumber}>
        {divs}
      </div>
    );
  }

  closeDialog() {
    this.setState({ modalIsOpen: false });
  }

  render(){
    const { SourceDialog, modalIsOpen, selectedClassName, selectedClassContent, innerDivNumber } = this.state;
    const showCodeDialog = SourceDialog && modalIsOpen && selectedClassContent;
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
             this.renderLoadingItem('progress-bar-stripes', 0),
           ])
         }
         {showCodeDialog && <SourceDialog.default selectedClassName={selectedClassName} closeDialog={this.closeDialog} innerDivNumber={innerDivNumber} classContent={selectedClassContent}/>}
     </section>
    )
  }
}

export default LoadingSection;
