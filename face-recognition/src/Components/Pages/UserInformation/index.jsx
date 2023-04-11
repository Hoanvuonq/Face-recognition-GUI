import HeaderHome from '../../Layouts/Header';

import Salmon from '../../../Assets/img/salmon.png';
import UploadFile from '../../../Assets/img/upload-file.png';

function UserInformation() {
    return (
        <>
            <HeaderHome />
            <section className="user-infor-page">
                <div className="user-information">
                    <div className="user-infor-container">
                        <form>
                            {/* <div className="bg-gra" /> */}
                            <div className="user-infor-content">
                                <div className="user-content-left">
                                    {/* <div className="inf-img">
                                        <img src={Salmon} alt="Salmon" className="img-user" />
                                    </div> */}

                                    <div className="inf-upload-img">
                                        <input type="file" name="file" id="file" className="inp-upload" />
                                        <label for="file" className="label-upload">
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
                                    </div>
                                </div>
                                <div className="user-content-right">
                                    <div className="inf-title">Infor User</div>
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
                                        <button className="btn-connecting">Connect</button>
                                    </div>

                                    {/* <table>
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
                                                <td>Nam</td>
                                            </tr>
                                            <tr>
                                                <td>Birhday</td>
                                                <td>09-09-9999</td>
                                            </tr>
                                        </tbody>
                                    </table> */}
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
