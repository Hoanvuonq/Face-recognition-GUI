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
                                            <div className="title-in4">ID: {id}</div>
                                            <div className="title-in4">Name: {userInfo.data.name}</div>
                                            <div className="title-in4">Skill: {userInfo.data.skill}</div>
                                            <div className="title-in4">Active: {userInfo.data.active}</div>
                                            <div className="title-in4">Added: {userInfo.data.added}</div>
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
