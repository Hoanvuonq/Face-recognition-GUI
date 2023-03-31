import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined, CheckCircleFilled, WarningFilled } from '@ant-design/icons';

//Component
import UserInfor from '../../Layouts/UserInfor';
import Camera from '../../Layouts/Camera';

// Images
import Face from '../../../Assets/img/face1.jpg';

function Home() {
    return (
        <div className="home-page">
            <div className="gui-page">
                <div className="content-gui">
                    <div className="content-left">
                        <div className="content-oke">
                            <div className="content-left-head">
                                <button className="flicker" />
                            </div>
                            <div className="content-left-camera">
                                <img src={Face} alt="face" />
                                {/* <Camera /> */}
                            </div>
                            <div className="cottent-left-remote">
                                <div className="u-remote">
                                    <Button className="btn-remote" icon={<PlayCircleOutlined />}></Button>
                                    <Button className="btn-remote" icon={<PauseCircleOutlined />}></Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-right">
                        <UserInfor />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
