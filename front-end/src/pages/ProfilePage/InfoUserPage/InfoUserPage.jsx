import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import InfoUser from '../../../components/InfoUser/InfoUser';
import classNames from 'classnames/bind';
import styles from './InfoUserPage.module.scss';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

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
                <InfoUser />
            </div>
            <ToastContainer />
        </div>
    );
}

export default InfoUserPage;
