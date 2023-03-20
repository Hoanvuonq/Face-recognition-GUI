import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Scss/main.scss';

// Components //
import Home from './Components/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default App;
