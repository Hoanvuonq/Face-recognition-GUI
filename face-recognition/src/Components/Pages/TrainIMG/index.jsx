import { useState, useEffect } from 'react';
import InputEnterIP from '../../Layouts/InputEnterIP';
import { trainImage, streamVideo } from '../../../api/api';
import CameraImg from '../../../Assets/img/camera-open.svg';
import SuccessIMG from '../../../Assets/img/success.png';
import { useNavigate, useParams } from 'react-router-dom';

const URL_API = 'http://127.0.0.1:5000';

const TrainIMG = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [cameraStream, setCameraStream] = useState('');
    const [success, setSuccess] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setIsOpen(true);
        setIsButtonVisible(false);
    };

    useEffect(() => {
        const loadCameraStream = async () => {
            try {
                const stream = await streamVideo(id);
                setCameraStream(stream);
            } catch (error) {
                console.log(error);
            }
        };
        loadCameraStream();
        return () => {
            if (cameraStream) {
                cameraStream.getTracks().forEach((track) => track.stop());
            }
        };
    }, [id, cameraStream]);

    const handleTrainImage = async () => {
        try {
            const result = await trainImage('example_parameter');
            console.log(result);
            setSuccess(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/UserInfor/${id}`);
        window.location.reload();
    };

    return (
        <section className="train-data-page">
            <div className="train-data">
                <div className="content-train-data">
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
                                <div className="zone">
                                    <button className="flicker"></button>
                                    <img
                                        alt="camera stream"
                                        src={`${URL_API}/vidfeed_dataset/${id}`}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-righ">
                        <button className="btn-train-img" onClick={handleTrainImage}>
                            Train Image
                        </button>
                        <form onSubmit={handleSubmit}>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainIMG;
