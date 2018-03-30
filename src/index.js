import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
     return(
       <header>
         <h1>AWESOME-LOADING</h1>
       </header>
      )
   }
}
  ReactDOM.render(<App />, document.querySelector('#app'))
