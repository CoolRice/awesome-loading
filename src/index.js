import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
 

class App extends React.Component {
  render(){
     return(
       <header>
         <h1>AWESOME-LOADING1</h1>
       </header>
      )
   }
}
ReactDOM.render(<App />, document.querySelector('#app'))
