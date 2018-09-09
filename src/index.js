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
           <div className="header">
             <div className="header-primary">AWESOME-LOADING</div>
             <div className="header-secendary">A pure CSS loading animation collection</div>
           </div>
         </header>
         <LoadingSection />
         <GithubCorner
           href="https://github.com/CoolRice/awesome-loading"
           octoColor="#353537"
           bannerColor="#f4f4f4"
         />
       </div>
      )
   }
}
ReactDOM.render(<App />, document.querySelector('#app'))
