import React, { useState, useEffect } from 'react';
import { CheckCircleFilled, WarningFilled } from '@ant-design/icons';
import { fetchCountTodayScan, fetchData } from '../../../api/api';

// Component
// import Clock from '../../Layouts/Clock';

//img
// import Ava from '../../../Assets/img/ava.png';
// import Ava2 from '../../../Assets/img/ava2.png';

function UserInfor() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetchData()
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        fetchCountTodayScan()
            .then((response) => {
                setCount(response);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className="user-infor">
            {/* <p>Total scans today: {count}</p> */}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>added</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <>
                            <tr className="render-item" key={item.accs_id}>
                                <td>{item.accs_prsn}</td>
                                <td>{item.prs_name}</td>
                                <td>{item.accs_added}</td>
                                <td>
                                    <div className="notify-success">
                                        <CheckCircleFilled />
                                    </div>
                                </td>
                            </tr>
                            {/* <hr className="hr-item" /> */}
                        </>
                    ))}
                </tbody>
                <hr />
            </table>
        </div>
    );
}

export default UserInfor;
