import React, { useState, useEffect } from 'react';
import HeaderHome from '../../Layouts/Header';
import { Button, Table } from 'antd';
import { getUsers } from '../../../api/api';

function ListUser() {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userlistData, setUserlistData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await getUsers();
            setUserlistData(result.data);
        }
        fetchData();
    }, []);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Skill',
            dataIndex: 'skill',
        },
        {
            title: 'Active',
            dataIndex: 'active',
        },
        {
            title: 'Added',
            dataIndex: 'added',
        },
    ];

    const data = userlistData.map((user) => ({
        key: user[0],
        id: user[0],
        name: user[1],
        skill: user[2],
        active: user[3],
        added: user[4],
    }));

    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;

    return (
        <>
            <HeaderHome />
            <section className="user-list-page">
                <div className="user-list">
                    <div className="user-list-container">
                        <div className="form-list-user">
                            <div className="user-list-content">
                                <div>
                                    <div className="load-list-user">
                                        <Button
                                            className="btn-load"
                                            type="primary"
                                            onClick={start}
                                            disabled={!hasSelected}
                                            loading={loading}
                                        >
                                            Reload
                                        </Button>
                                        <span className="title-select-user">
                                            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                                        </span>
                                    </div>

                                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ListUser;
