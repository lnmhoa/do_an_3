import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import Order from '../../../components/Order/Order';
import classNames from 'classnames/bind';
import styles from './OrderPage.module.scss';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function OrderPage({ title }) {
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
                <Order />
            </div>
            <ToastContainer />
        </div>
    );
}

export default OrderPage;
