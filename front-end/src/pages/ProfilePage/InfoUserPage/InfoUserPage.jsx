import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import InfoUser from '../../../components/InfoUser/InfoUser';
import classNames from 'classnames/bind';
import styles from './InfoUserPage.module.scss';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

const infoFields = [
    {
        label: 'Họ tên:',
        name: 'fullName',
        defaultValue: 'Nguyễn Lê Tấn Đạt',
        placeholder: 'Điền họ tên của bạn...',
    },
    { label: 'Giới tính:', name: 'gender', options: ['Nam', 'Nữ'] },
    {
        label: 'Số điện thoại:',
        name: 'phoneNumber',
        defaultValue: '0397364664',
        pattern: '[0-9]*',
        placeholder: 'Điền số điện thoại của bạn',
    },
    { label: 'Ngày sinh:', name: 'dateOfBirth', defaultValue: '2003-01-01', type: 'date' },
    {
        label: 'Địa chỉ:',
        name: 'address',
        defaultValue: 'Hưng Lợi Ninh Kiều Cần Thơ',
        placeholder: 'Điền địa chỉ của bạn...',
    },
    { label: 'Ngày tham gia:', name: 'joinedDate', defaultValue: '2024-01-01', type: 'date' },
];

function InfoUserPage({ title }) {
    const notify = (title) => toast(`Chào mừng đến với ${title}`);
    useEffect(() => {
        document.title = title;
        notify(title);
    }, [title]);
    return (
        <div className={cx('container')}>
            <SideBar />
            <div className={cx('sub-container', 'null')}></div>
            <div className={cx('sub-container', 'content')}>
                <InfoUser data={infoFields} />
            </div>
            <ToastContainer />
        </div>
    );
}

export default InfoUserPage;
