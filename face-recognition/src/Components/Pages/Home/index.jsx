import React, { useState } from 'react';

// Component
import UserInfor from '../../Layouts/UserInfor';
import HeaderHome from '../../Layouts/Header';
import Design from '../../Layouts/Design';
import Camera from '../../Layouts/Camera';

// Img
import CameraImg from '../../../Assets/img/camera-open.svg';

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const handleButtonClick = () => {
        setIsOpen(true);
        setIsButtonVisible(false);
    };

    return (
        <>
            <HeaderHome />
            <section className="home-page">
                <div className="bg-gra" />
                <div className="home">
                    <div className="content-home">
                        <div className="content-left">
                            {isButtonVisible && <img src={CameraImg} alt="camera" onClick={handleButtonClick} className={`open-camera ${isOpen ? 'fade-out' : ''}`} />}
                            <div className={`camera ${isOpen ? 'open-camera-btn' : ''}`}>
                                <div className="content-left-camera">
                                    <Camera />
                                </div>
                            </div>
                        </div>
                        <div className="content-right">
                            <UserInfor />
                        </div>
                    </div>
                </div>
                <Design />
            </section>
        </>
    );
}

export default Home;
