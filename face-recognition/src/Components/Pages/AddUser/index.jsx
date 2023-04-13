import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../../Layouts/Header';

//img
import UploadFile from '../../../Assets/img/upload-file.png';
import ChangeImg from '../../../Assets/img/change.png';

function AddUser() {
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
                                    <div className="inf-upload-img">
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
                                    </div>
                                </div>
                                <div className="user-content-right">
                                    <div className="inf-title">Add User</div>
                                    <div className="inf-name">
                                        <label for="title" className="lab-name">
                                            Name
                                        </label>
                                        <input type="text" name="title" id="title" placeholder="Salmon" className="inp-name" />
                                    </div>

                                    <div className="inf-id-s-add">
                                        <div className="inf-id inf-name">
                                            <label for="title" className="lab-name lab-id">
                                                ID
                                            </label>
                                            <input type="text" name="title" id="title" placeholder="0001" className="inp-name" />
                                        </div>
                                        <div className="inf-id inf-name">
                                            <label for="title" className="lab-name lab-id">
                                                Sex
                                            </label>
                                            <input type="text" name="title" id="title" placeholder="Salmon" className="inp-name" />
                                        </div>
                                        <div className="inf-id inf-name">
                                            <label for="title" className="lab-name lab-id">
                                                Time
                                            </label>
                                            <input type="text" name="title" id="title" placeholder="Salmon" className="inp-name" />
                                        </div>
                                    </div>

                                    <div className="inf-id-s-add">
                                        <div className="inf-id2 inf-name">
                                            <label for="title" className="lab-name lab-id">
                                                Position
                                            </label>
                                            <input type="text" name="title" id="title" placeholder="Salmon" className="inp-name" />
                                        </div>
                                        <div className="inf-id2 inf-name">
                                            <label for="title" className="lab-name lab-id">
                                                Innitiated Date
                                            </label>
                                            <input type="date" name="title" id="title" placeholder="Salmon" className="inp-name" />
                                        </div>
                                    </div>

                                    <div className="connected">
                                        <Link to={'/UserInformation'}>
                                            <button className="btn-connecting">Create</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddUser;
