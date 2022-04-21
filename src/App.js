import React, { Component } from 'react';
// import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <img src={logo} className="logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
// import CSSModule from './CSSModule';
class App extends Component {
  render() {
    return (
      <div>
        {/* <SassComponent />
         */}
        {/* <CSSModule /> */}
        <StyledComponent />
      </div>
    );
  }
}

export default App;