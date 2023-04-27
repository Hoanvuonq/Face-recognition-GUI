import React, { useState, useEffect } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import { fetchCountTodayScan, fetchData } from '../../../api/api';

function UserInfor() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    const loadData = () => {
        fetchData()
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        loadData();
        const intervalId = setInterval(loadData, 1000);
        return () => clearInterval(intervalId);
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
                        </>
                    ))}
                </tbody>
                <hr />
            </table>
        </div>
    );
}

export default UserInfor;
