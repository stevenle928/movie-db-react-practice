import React from 'react';
import Header from '../elements/Header/Header'; //component we haven't made yet
import Home from '../Home/Home'; //haven't created yet

const App = () => { //in every component in react you must return something
    return (
        <div>
            <Header />
            <Home />
        </div>
    )
}

export default App; //we export it using ES6 syntax, now we have a basic component