import React from 'react';
import { CheckCircleFilled, WarningFilled } from '@ant-design/icons';

// Component
import Clock from '../../Layouts/Clock';

//img
import Ava from '../../../Assets/img/ava.png';
import Ava2 from '../../../Assets/img/ava2.png';

function UserInfor() {
    return (
        <>
            <div className="user-infor">
                <div className="time">
                    <Clock />
                </div>
                <div className="user-img">
                    <img src={Ava} alt="ava-1" />
                </div>
                <div className="user-img">
                    <img src={Ava2} alt="ava-1" />
                </div>
                <div className="user-id">
                    <p>Tên: Nguyễn Hoàng Vương</p>
                    <p>ID: 15102002</p>
                </div>
                <div className="notify-success">
                    <CheckCircleFilled />
                </div>
            </div>
            <div className="user-infor">
                <div className="time">
                    <Clock />
                </div>
                <div className="user-img">
                    <img src={Ava} alt="ava-1" />
                </div>
                <div className="user-img">
                    <img src={Ava2} alt="ava-1" />
                </div>
                <div className="user-id">
                    <p>Tên: Nguyễn Hoàng Vương</p>
                    <p>ID: 15102002</p>
                </div>
                <div className="notify-success">
                    <CheckCircleFilled />
                </div>
            </div>
            <div className="user-infor">
                <div className="time">
                    <Clock />
                </div>
                <div className="user-img">
                    <img src={Ava} alt="ava-1" />
                </div>
                <div className="user-img">
                    <img src={Ava2} alt="ava-1" />
                </div>
                <div className="user-id">
                    <p>Tên: Nguyễn Hoàng Vương</p>
                    <p>ID: 15102002</p>
                </div>
                <div className="notify-error">
                    <WarningFilled />
                </div>
            </div>
            <div className="user-infor">
                <div className="time">
                    <Clock />
                </div>
                <div className="user-img">
                    <img src={Ava} alt="ava-1" />
                </div>
                <div className="user-img">
                    <img src={Ava2} alt="ava-1" />
                </div>
                <div className="user-id">
                    <p>Tên: Nguyễn Hoàng Vương</p>
                    <p>ID: 15102002</p>
                </div>
            </div>
        </>
    );
}

export default UserInfor;
