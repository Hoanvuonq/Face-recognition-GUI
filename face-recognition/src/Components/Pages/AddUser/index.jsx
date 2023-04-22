import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderHome from '../../Layouts/Header';
import UploadFile from '../../../Assets/img/upload-file.png';
import ChangeImg from '../../../Assets/img/change.png';
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
    const navigate = useNavigate();

    const handleAddUser = async () => {
        try {
            const newNbr = await addNewUser();
            console.log('newnbr:', newNbr);
            setNewUser({ ...newUser, txtnbr: newNbr }); // set giá trị txtnbr sau khi newNbr được trả về
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
            } catch (error) {
                console.log(error);
                setSuccess(false);
                setError(true);
            }
        }
    };

    useEffect(() => {
        let timerId;
        if (success) {
            timerId = setTimeout(() => {
                navigate('/userinformation');
            }, 2000);
        }

        return () => clearTimeout(timerId);
    }, [success]);

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
                            <div className="alert alert-danger" role="alert">
                                Failed to add user
                            </div>
                        )}
                        {success && (
                            <div className="alert alert-success" role="alert">
                                User added successfully
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
                                            <label htmlFor="txtname" className="lab-name">
                                                Name
                                                <input
                                                    type="text"
                                                    className="inp-name"
                                                    id="txtname"
                                                    name="txtname"
                                                    value={newUser.txtname}
                                                    onChange={(e) =>
                                                        setNewUser({ ...newUser, txtname: e.target.value })
                                                    }
                                                />
                                                {nameError && <span className="error">{nameError}</span>}
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

                                    <div className="connected">
                                        <button type="button" className="btn-connecting" onClick={handleAddUser}>
                                            Get ID
                                        </button>
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
