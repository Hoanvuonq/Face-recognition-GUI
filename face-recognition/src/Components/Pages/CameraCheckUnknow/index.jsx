import { useState, useEffect } from 'react';
// Component
// import UserInfor from '../../Layouts/UserInfor';
import HeaderHome from '../../Layouts/Header';
import CameraCheckUnk from '../../Layouts/CameraCheckUnk';
import InputEnterIP from '../../Layouts/InputEnterIP';
import { fetchCheckUnknown, fetchUnknownImage } from '../../../api/api';

// Img
import CameraImg from '../../../Assets/img/camera-open.svg';
import View from '../../../Assets/img/view.png';

function CameraCheckUnknow() {
    const [isOpen, setIsOpen] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [unknownImages, setUnknownImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetchCheckUnknown()
            .then((images) => setUnknownImages(images))
            .catch((error) => console.error(error));
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handlePopupClose = () => {
        setSelectedImage(null);
    };

    const handleButtonClick = () => {
        setIsOpen(true);
        setIsButtonVisible(false);
    };

    return (
        <>
            <HeaderHome />
            <section className="home-page">
                <div className="home">
                    <div className="content-home">
                        <div className="content-left">
                            {isButtonVisible && (
                                <img
                                    src={CameraImg}
                                    alt="camera"
                                    onClick={handleButtonClick}
                                    className={`open-camera ${isOpen ? 'fade-out' : ''}`}
                                />
                            )}
                            <div className={`camera ${isOpen ? 'open-camera-btn' : ''}`}>
                                <InputEnterIP />
                                <div className="content-left-camera">
                                    <CameraCheckUnk />
                                </div>
                            </div>
                        </div>
                        <div className="content-right">
                            {unknownImages.map((image, index) => (
                                <div className="item-checkunknow" key={index}>
                                    <p> Unknown</p>
                                    <p> {image.datetime}</p>
                                    <button className="btn-view" onClick={() => handleImageClick(image)}>
                                        <img src={View} alt="view" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {selectedImage && (
                <div className="popup">
                    <div className="popup-inner">
                        <img src={`http://127.0.0.1:5000${selectedImage.image_url}`} alt="popup-img" />
                        <button onClick={handlePopupClose}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default CameraCheckUnknow;
