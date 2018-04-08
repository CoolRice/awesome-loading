import React from 'react';
import ReactDOM from 'react-dom';
import LoadingSection from './LoadingSection';
import './index.scss';


class App extends React.Component {
  render(){
     return(
       <div>
         <header>
           <h1>AWESOME-LOADING</h1>
         </header>
         <LoadingSection />
       </div>
      )
   }
}
ReactDOM.render(<App />, document.querySelector('#app'))
