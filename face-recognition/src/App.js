import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Scss/main.scss';

// Components //
import Home from './Components/Pages/Home';
import Clock from './Components/Layouts/Clock';
import Camera from './Components/Layouts/Camera';
import UserInfor from './Components/Layouts/UserInfor';

function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="Clock" element={<Clock />} />
                    <Route exact path="Camera" element={<Camera />} />
                    <Route exact path="UserInfor" element={<UserInfor />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default App;
