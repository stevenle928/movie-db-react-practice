import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App' //We are importing our App folder. We don't have to specify .js because react will know
import './index.css'


/*
We use ReactDOM.render([what to render], [where to render])
-The 'what' renders the App.js file and the 'where' renders it in our index.html file in the 'root' div
*/
ReactDOM.render(<App />, document.getElementById('root')) 