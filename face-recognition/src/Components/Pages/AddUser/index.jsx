import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderHome from '../../Layouts/Header';
import UploadFile from '../../../Assets/img/upload-file.png';
import ChangeImg from '../../../Assets/img/change.png';
import SuccessIMG from '../../../Assets/img/success.png';
import ErrorIMG from '../../../Assets/img/error.png';
import { addNewUser, submitNewUser } from '../../../api/api';

const AddUser = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showUploader, setShowUploader] = useState(true);
    const { newnbr } = useParams();
    const [newUser, setNewUser] = useState({ txtname: '', optskill: '', txtnbr: newnbr });
    const [nameError, setNameError] = useState('');
    const [skillError, setSkillError] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [idFetched, setIdFetched] = useState(false);
    const navigate = useNavigate();

    const handleAddUser = async () => {
        try {
            const newNbr = await addNewUser();
            console.log('newnbr:', newNbr);
            setNewUser({ ...newUser, txtnbr: newNbr });
            setIdFetched(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newUser.txtname) {
            setNameError('Please enter a name');
        } else if (!newUser.optskill) {
            setSkillError('Please select a skill');
        } else {
            try {
                await submitNewUser(newUser);
                setSuccess(true);
                setError(false);
                setTimeout(() => {
                    navigate(`/UserInfor/${newUser.txtnbr}`);
                }, 2000);
            } catch (error) {
                console.log(error);
                setSuccess(false);
                setError(true);
            }
        }
    };

    useEffect(() => {
        let timerId;
        if (success && !idFetched) {
            timerId = setTimeout(() => {
                setSuccess(false);
            }, 2000);
        } else if (error) {
            timerId = setTimeout(() => {
                setError(false);
            }, 2000);
        }

        return () => clearTimeout(timerId);
    }, [success, error, idFetched]);

    //Upload img
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
                        {error && (
                            <div className="notification">
                                <div className="toast error">
                                    <img src={ErrorIMG} alt="Error" />
                                    <div className="content-notify">
                                        <div className="title-notify">Error</div>
                                        <span className="span-title-notify">This is a error</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        {success && (
                            <div className="notification">
                                <div className="toast success">
                                    <img src={SuccessIMG} alt="Success" />
                                    <div className="content-notify">
                                        <div className="title-notify">Success</div>
                                        <span className="span-title-notifi">This is a success</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="user-infor-content">
                                <div className="user-content-left">
                                    <div className="inf-upload-img">
                                        {showUploader && (
                                            <label htmlFor="file" className="label-upload">
                                                <input
                                                    type="file"
                                                    name="file"
                                                    id="file"
                                                    className="inp-upload"
                                                    onChange={handleImageChange}
                                                />
                                                <div className="conent-upload-file">
                                                    <div className="upload-file-img">
                                                        <img src={UploadFile} alt="Upload File" />
                                                    </div>
                                                    <span className="span-title-upload">Drop files here</span>
                                                    <span className="span-title-upload-inf-img">
                                                        PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                                                    </span>
                                                    <span className="span-title-upload-inf-img">Or choose a file</span>
                                                    <span className="span-browse">Browse</span>
                                                </div>
                                            </label>
                                        )}
                                        {!showUploader && (
                                            <div className="uploaded-image">
                                                <img
                                                    className="img-upload-success"
                                                    src={selectedImage}
                                                    alt="Selected"
                                                />
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
                                    <div className=" inf-name">
                                        <label htmlFor="txtname" className="lab-name">
                                            Name
                                            <input
                                                type="text"
                                                className="inp-name"
                                                id="txtname"
                                                name="txtname"
                                                value={newUser.txtname}
                                                onChange={(e) => setNewUser({ ...newUser, txtname: e.target.value })}
                                            />
                                            {nameError && <span className="error">{nameError}</span>}
                                        </label>
                                    </div>
                                    <div className="inf-id-s-add">
                                        <div className="inf-id inf-name">
                                            <label htmlFor="txtnbr" className="lab-name lab-id">
                                                ID
                                                <input
                                                    type="text"
                                                    className="inp-name"
                                                    id="txtnbr"
                                                    name="txtnbr"
                                                    value={newUser.txtnbr}
                                                    disabled
                                                />
                                            </label>
                                        </div>

                                        <div className="inf-id inf-name">
                                            <label htmlFor="optskill" className="lab-name lab-id">
                                                Kill
                                                <select
                                                    className="inp-name"
                                                    id="optskill"
                                                    name="optskill"
                                                    value={newUser.optskill}
                                                    onChange={(e) =>
                                                        setNewUser({ ...newUser, optskill: e.target.value })
                                                    }
                                                >
                                                    <option value="">--Select--</option>
                                                    <option value="Beginner">Beginner</option>
                                                    <option value="Intermediate">Intermediate</option>
                                                    <option value="Expert">Expert</option>
                                                </select>
                                                {skillError && <span className="error">{skillError}</span>}
                                            </label>
                                        </div>
                                    </div>

                                    <div className="design-btn">
                                        <input type="checkbox" name="on-off" id="on-off" />
                                        <label htmlFor="on-off">
                                            <div className="btn-design" onClick={handleAddUser}>
                                                ID
                                            </div>
                                        </label>
                                    </div>
                                    <div className="connected">
                                        <button type="submit" className="btn-connecting">
                                            Add User
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddUser;
