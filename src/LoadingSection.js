import React from 'react';
import ReactDOM from 'react-dom';
import ThreeDotsScale from './LoadingItems/ThreeDotsScale';
import ThreeDotsJump from './LoadingItems/ThreeDotsJump';
import ThreeDotsRotate from './LoadingItems/ThreeDotsRotate';
import ThreeDotsChase from './LoadingItems/ThreeDotsChase';
import './index.scss';


class LoadingSection extends React.Component {
  render(){
    return (
      <section className="loading-section">
         <div className="col">
             <div className="content">
               <ThreeDotsScale />
             </div>
         </div>
         <div className="col">
             <div className="content">
               <ThreeDotsJump />
             </div>
         </div>
         <div className="col">
             <div className="content">
               <ThreeDotsRotate />
             </div>
         </div>
         <div className="col">
             <div className="content">
               <ThreeDotsChase />
             </div>
         </div>
         <div className="col">
             <div className="content">
               <div className="loading-1">
                 <div/>
                 <div/>
                 <div/>
                 </div>
             </div>
         </div>
     </section>
    )
  }
}

export default LoadingSection;
