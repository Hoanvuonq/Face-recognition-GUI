import { useState } from 'react';
import HeaderHome from '../../Layouts/Header';
import { Button, Table } from 'antd';

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
        title: 'Position',
        dataIndex: 'position',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Edit',
        dataIndex: 'edit',
    },
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        id: ` ${i}`,
        name: `Edward King ${i}`,
        position: `Caption`,
        status: `Sucsses`,
        edit: `Edit`,
    });
}
function ListUser() {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
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
                                        <Button className="btn-load" type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                                            Reload
                                        </Button>
                                        <span className="title-select-user">{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
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
