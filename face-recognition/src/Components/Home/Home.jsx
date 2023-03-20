import React from 'react';

// Images
import Face from '../../Assets/img/face1.jpg';

function Home() {
    return (
        <div className="home-page">
            <div className="gui">
                <div className="content-gui">
                    <div className="content-right">
                        <img src={Face} alt="Face" />
                    </div>
                    <div className="content-left">
                        <input className="" type="text" placeholder="Tên" />
                        <input className="" type="text" placeholder="ID" />
                        <input className="" type="text" placeholder="Chức vụ" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
