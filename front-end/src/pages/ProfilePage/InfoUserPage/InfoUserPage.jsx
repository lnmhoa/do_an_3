import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import InfoUser from '../../../components/InfoUser/InfoUser';
// import SwalComp from '../../../components/Swal/SwalComp';
import classNames from 'classnames/bind';
import styles from './InfoUserPage.module.scss';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function InfoUserPage({ title }) {
    const user = useSelector((state) => state.user);
    // const navigate = useNavigate();

    useEffect(() => {
        document.title = title;
    }, [title]);

    

    const infoFields = [
        {
            label: 'Họ tên:',
            name: 'fullName',
            defaultValue: user.name,
            placeholder: 'Điền họ tên của bạn...',
        },
        { label: 'Giới tính:', name: 'gender', options: ['Nam', 'Nữ'] },
        {
            label: 'Số điện thoại:',
            name: 'phoneNumber',
            defaultValue: user.phoneNumber,
            pattern: '[0-9]*',
            placeholder: 'Điền số điện thoại của bạn',
        },
        { label: 'Ngày sinh:', name: 'dateOfBirth', defaultValue: user.dateOfBirth, type: 'date' },
        {
            label: 'Địa chỉ:',
            name: 'address',
            defaultValue: user.address,
            placeholder: 'Điền địa chỉ của bạn...',
        },
    ];
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
