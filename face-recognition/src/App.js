import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Scss/main.scss';

// Components //
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import UserInformation from './Components/Pages/UserInformation';
import Clock from './Components/Layouts/Clock';
import CameraDisplay from './Components/Layouts/CameraDisplay';
import UserInfor from './Components/Layouts/UserInfor';
import AddUser from './Components/Pages/AddUser';
import ListUser from './Components/Pages/ListUser';
import Extension from './Components/Layouts/Extension';

function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/Home" element={<Home />} />
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/Register" element={<Register />} />
                    <Route exact path="/UserInformation" element={<UserInformation />} />
                    <Route exact path="/Clock" element={<Clock />} />
                    <Route exact path="/CameraDisplay" element={<CameraDisplay />} />
                    <Route exact path="/UserInfor" element={<UserInfor />} />
                    <Route exact path="/AddUser" element={<AddUser />} />
                    <Route exact path="/ListUser" element={<ListUser />} />
                    <Route exact path="/Extension" element={<Extension />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default App;
