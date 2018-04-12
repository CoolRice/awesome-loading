import React from 'react';
import ReactDOM from 'react-dom';


class LoadingSection extends React.Component {

  renderItem(fragments) {
    return fragments.map((fragment, index) =>
      <div key={index} className="col"><div className="content">{fragment}</div></div>)
  }

  render(){
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
     </section>
    )
  }
}

export default LoadingSection;
