import React, { useState, useEffect } from 'react';
import HeaderHome from '../../Layouts/Header';
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../../../api/api';

//img
import Salmon from '../../../Assets/img/salmon.png';

const UserInformation = () => {
    const { id } = useParams(); // lấy user id từ url params
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUserInfo(id);
                console.log(userData);
                console.log(id);
                setUserInfo(userData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [id]);

    console.log(userInfo);
    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <HeaderHome />
            <section className="user-infor-page">
                <div className="user-information">
                    <div className="user-infor-container">
                        <form>
                            <div className="user-infor-content">
                                <div className="user-content-left">
                                    <div className="inf-img">
                                        <img src={Salmon} alt="Salmon" className="img-user" />
                                    </div>
                                </div>
                                <div className="user-content-right">
                                    <div className="inf-title">Infor User</div>

                                    {userInfo && (
                                        <div className="info-user">
                                            <div className="title-in4">
                                                ID:
                                                <span className="content-in4">{id}</span>
                                            </div>
                                            <div className="title-in4">
                                                Name:
                                                <span className="content-in4">{userInfo.data.name}</span>
                                            </div>
                                            <div className="title-in4">
                                                Skill: <span className="content-in4">{userInfo.data.skill}</span>
                                            </div>
                                            <div className="title-in4">
                                                Active: <span className="content-in4">{userInfo.data.active}</span>
                                            </div>
                                            <div className="title-in4">
                                                Added: <span className="content-in4">{userInfo.data.added}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserInformation;
