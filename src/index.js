import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import LoadingSection from './LoadingSection';
import './scss/index.scss';


class App extends React.Component {
  render(){
     return(
       <div>
         <header>
           <h1>AWESOME-LOADING</h1>
         </header>
         <LoadingSection />
         <GithubCorner href="https://github.com/CoolRice/awesome-loading" octoColor="#353537" bannerColor="#ff6347"/>
       </div>
      )
   }
}
ReactDOM.render(<App />, document.querySelector('#app'))
