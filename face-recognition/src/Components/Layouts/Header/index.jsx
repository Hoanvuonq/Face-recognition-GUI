import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

// Images
import Logo from '../../../Assets/img/logo-camera.png';

function HeaderHome() {
    return (
        <Header className="header">
            <div className="header-container">
                <div className="header-content">
                    <div className="item-logo">
                        <Link to="#" className="link-logo">
                            <img src={Logo} alt="Logo" className="img-logo" />
                        </Link>
                    </div>
                    <div className="item-menu">
                        <div className="menu-content">
                            <button className="btn-menu">
                                <span className="spn-menu"></span>
                                <span className="spn-menu"></span>
                                <span className="spn-menu"></span>
                            </button>
                            <div className="list-menu">
                                <ul className="ul-menu">
                                    <li>
                                        <Link to={'/'}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="#">About</Link>
                                    </li>
                                    <li>
                                        <Link to={'/UserInformation'}>Infor User</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tool">
                            <div className="search">
                                <button className="btn-search">
                                    <SearchOutlined className="icon-search" />
                                </button>
                            </div>
                            <Link to={'/Login'} className="login">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    );
}

export default HeaderHome;
