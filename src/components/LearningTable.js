import { Table, Tag, Space } from 'antd';
import React from 'react';

function LearningTable() {
    const columns = [{
        title: "Course name",
        dataIndex: "courseName",
        key: "courseName",
    },
    {
        title: "Duration",
        dataIndex: "duration",
        key: "duration",
    },
    {
        title: "Level",
        dataIndex: "level",
        key: "level",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (_, text) => (
            <Tag color={text.status === "completed" ? "green" : "blue"}>
                {text.status}
            </Tag >
        ),
    },
    {
        title: "Action",
        key: "action",
        render: () => (
            <Space size="middle">
                <a>View</a>
                <a>Delete</a>
            </Space>
        )
    },
    ];
    const data = [
        {
            id: "1",
            courseName: "Design Accesibility",
            duration: "5 hours",
            level: "Advanced",
            status: "completed"
        },
        {
            id: "2",
            courseName: "Java For Beginners",
            duration: "9 hours",
            level: "Intermediate",
            status: "in progress"
        },
        {
            id: "3",
            courseName: "Next JS",
            duration: "12 hours",
            level: "Advanced",
            status: "completed"
        },
        {
            id: "4",
            courseName: "Design Pattern",
            duration: "5 hours",
            level: "Advanced",
            status: "completed"
        },
        {
            id: "5",
            courseName: "Design Accesibility",
            duration: "9 hours",
            level: "Advanced",
            status: "in progress"
        },
        {
            id: "6",
            courseName: "UX Reserch",
            duration: "8 hours",
            level: "Advanced",
            status: "completed"
        },
        {
            id: "7",
            courseName: "Machine Learning Concepts",
            duration: "6 hours",
            level: "Advanced",
            status: "in progress"
        },
    ];
    return <Table className="mt-4" columns={columns} dataSource={data} />;
}

export default LearningTable;