import { useRef, useEffect } from 'react';
import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
// import { SearchOutlined } from '@ant-design/icons';

// Images
import Logo from '../../../Assets/img/logo-camera.png';

function HeaderHome() {
    const headerRef = useRef(null);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (headerRef.current && scrollPosition > 1) {
            headerRef.current.classList.add('hidden');
        } else {
            headerRef.current.classList.remove('hidden');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <Header>
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
                                            <Link to={'/CameraLive'}>Camera Live</Link>
                                        </li>
                                        <li>
                                            <Link to={'/CameraCheckUnknow'}>Camera Check</Link>
                                        </li>
                                        <li>
                                            <Link to={'/ListUser'}>List User</Link>
                                        </li>
                                        <li>
                                            <Link to={'/AddUser'}>Add User</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tool">
                                <Link to={'/'} className="login">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
        </div>
    );
}

export default HeaderHome;
