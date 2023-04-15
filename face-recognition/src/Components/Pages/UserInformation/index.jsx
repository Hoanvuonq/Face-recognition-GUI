import React from 'react';
import HeaderHome from '../../Layouts/Header';

//img
import Salmon from '../../../Assets/img/salmon.png';

function UserInformation() {
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
