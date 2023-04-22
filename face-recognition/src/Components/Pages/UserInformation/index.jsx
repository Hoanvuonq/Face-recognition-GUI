import React, { useState, useEffect } from 'react';
import HeaderHome from '../../Layouts/Header';
import { getUserById } from '../../../api/api';

//img
import Salmon from '../../../Assets/img/salmon.png';

const UserInformation = ({ navigateToUser }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUserById();
            setUsers(data);
        };
        fetchUsers();
    }, []);

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
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Skill</th>
                                                <th>Active</th>
                                                <th>Added</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user) => (
                                                <tr key={user.prs_nbr} onClick={() => navigateToUser(user.prs_nbr)}>
                                                    <td>{user.prs_nbr}</td>
                                                    <td>{user.prs_name}</td>
                                                    <td>{user.prs_skill}</td>
                                                    <td>{user.prs_active ? 'Yes' : 'No'}</td>
                                                    <td>{user.prs_added}</td>
                                                </tr>
                                            ))}
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
};

export default UserInformation;
