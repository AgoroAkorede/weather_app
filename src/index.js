import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { ResultProvider } from './ResultProvider'
import reducer,{initialState} from './reducer'

import App from './App';
// const HatsPage = () => {
//   <div>
//     <h1>HatsPage</h1>
//   </div> 
// }


ReactDOM.render(
  <ResultProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ResultProvider>
 
  ,document.getElementById('root')
);

