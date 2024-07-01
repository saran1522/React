import logo from './logo.svg';
import './App.css';
import Header from "./Componants/Header.js"
import MainContent from "./Componants/MainContent.js"
import Footer from "./Componants/Footer.js"

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React With Saran
  //       </a>
  //     </header>
  //   </div>
  // );

  return(
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;
