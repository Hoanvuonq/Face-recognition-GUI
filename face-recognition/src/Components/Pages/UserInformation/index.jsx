import HeaderHome from '../../Layouts/Header';

import Salmon from '../../../Assets/img/salmon.png';

function UserInformation() {
    return (
        <>
            <HeaderHome />
            <section className="user-infor-page">
                <div className="bg-gra" />
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
                                    {/* <div className="inf-name">
                                        <label for="title" className="lab-name">
                                            Name
                                        </label>
                                        <input type="text" name="title" id="title" placeholder="Salmon" className="inp-name" />
                                    </div> */}

                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>Salmon</td>
                                            </tr>
                                            <tr>
                                                <td>ID</td>
                                                <td>999999</td>
                                            </tr>
                                            <tr>
                                                <td>Sex</td>
                                                <td>Nam</td>
                                            </tr>{' '}
                                            <tr>
                                                <td>Birhday</td>
                                                <td>09-09-9999</td>
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
