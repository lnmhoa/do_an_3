import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import classNames from 'classnames/bind';
import ControllerUser from '../../../components/ControllerUser/ControllerUser';
import styles from './ControllerPage.module.scss';
import { useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cx = classNames.bind(styles);

function ControllerPage({ title }) {
    const notify = (title) =>
        toast(`Chào mừng đến với ${title}`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
        });
    useEffect(() => {
        document.title = title;
        notify(title);
    }, [title]);
    return (
        <div className={cx('container')}>
            <SideBar />
            <div className={cx('sub-container', 'null')}></div>
            <div className={cx('sub-container', 'content')}>
                <ControllerUser />
            </div>
            <ToastContainer />
        </div>
    );
}

export default ControllerPage;
