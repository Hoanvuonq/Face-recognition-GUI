import React, { useState } from 'react';
import HeaderHome from '../../Layouts/Header';

//img
import UploadFile from '../../../Assets/img/upload-file.png';
import ChangeImg from '../../../Assets/img/change.png';
import Salmon from '../../../Assets/img/salmon.png';

function UserInformation() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showUploader, setShowUploader] = useState(true);

    const handleImageChange = (e) => {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
        setShowUploader(false);
    };

    const handleImageReset = () => {
        setSelectedImage(null);
        setShowUploader(true);
    };

    return (
        <>
            <HeaderHome />
            <section className="user-infor-page">
                <div className="user-information">
                    <div className="user-infor-container">
                        <form>
                            <div className="user-infor-content">
                                <div className="user-content-left">
                                    {/* <div className="inf-upload-img">
                                        {showUploader && (
                                            <label htmlFor="file" className="label-upload">
                                                <input type="file" name="file" id="file" className="inp-upload" onChange={handleImageChange} />
                                                <div className="conent-upload-file">
                                                    <div className="upload-file-img">
                                                        <img src={UploadFile} alt="Upload File" />
                                                    </div>
                                                    <span className="span-title-upload">Drop files here</span>
                                                    <span className="span-title-upload-inf-img">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</span>
                                                    <span className="span-title-upload-inf-img">Or choose a file</span>
                                                    <span className="span-browse">Browse</span>
                                                </div>
                                            </label>
                                        )}
                                        {!showUploader && (
                                            <div className="uploaded-image">
                                                <img className="img-upload-success" src={selectedImage} alt="Selected" />
                                                <button className="btn-change" onClick={handleImageReset}>
                                                    <img className="change-img" src={ChangeImg} alt="Change" />
                                                    Change Images
                                                </button>
                                            </div>
                                        )}
                                    </div> */}
                                    <div className="inf-img">
                                        <img src={Salmon} alt="Salmon" className="img-user" />
                                    </div>
                                </div>
                                <div className="user-content-right">
                                    <div className="inf-title">Infor User</div>

                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Full Name</td>
                                                <td>Salmon</td>
                                            </tr>
                                            <tr>
                                                <td>ID</td>
                                                <td>999999</td>
                                            </tr>
                                            <tr>
                                                <td>Sex</td>
                                                <td>Male</td>
                                            </tr>
                                            <tr>
                                                <td>Position</td>
                                                <td>Dev</td>
                                            </tr>
                                            <tr>
                                                <td>Time</td>
                                                <td>18:33</td>
                                            </tr>
                                            <tr>
                                                <td>Innitiated Date</td>
                                                <td>13-4-2023</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UserInformation;
