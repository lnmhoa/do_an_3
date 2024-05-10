import styles from './InfoUserAdmin.module.scss';
import className from 'classnames/bind';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import { FaPenToSquare } from 'react-icons/fa6';

const cx = className.bind(styles);

function InfoUserAdmin(props) {
    const dataUser = [
        {
            _id: '1',
            fullName: 'Nguyễn Văn A',
            dateOfBirth: '01/01/1990',
            gender: 'Nam',
            address: 'Hà Nội',
            phoneNumber: '0123456789',
            email: 'example1@example.com',
        },
        {
            _id: '2',
            fullName: 'Trần Thị B',
            dateOfBirth: '02/02/1995',
            gender: 'Nữ',
            address: 'Hồ Chí Minh',
            phoneNumber: '9876543210',
            email: 'example2@example.com',
        },
    ];

    return (
        <div className={cx('container')}>
            <AdminSidebar />
            <div className={cx('sub-container', 'content')}>
                <div className={cx('table-title')}>Danh sách khách hàng</div>
                <table className={cx('table-upload')}>
                    <thead>
                        <tr>
                            <th style={{ width: '2%' }}>#</th>
                            <th style={{ width: '15%' }}>Họ & tên</th>
                            <th style={{ width: '10%' }}>Ngày sinh</th>
                            <th style={{ width: '10%' }}>Giới tính</th>
                            <th style={{ width: '25%' }}>Địa chỉ</th>
                            <th style={{ width: '10%' }}>Số điện thoại</th>
                            <th style={{ width: '25%' }}>Email</th>
                            <th style={{ width: '3%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataUser.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.fullName}</td>
                                <td>{user.dateOfBirth}</td>
                                <td>{user.gender}</td>
                                <td>{user.address}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button>
                                        <FaPenToSquare />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default InfoUserAdmin;
