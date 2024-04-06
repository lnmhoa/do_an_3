import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import Order from '../../../components/Order/Order';
import classNames from 'classnames/bind';
import styles from './OrderPage.module.scss';

const cx = classNames.bind(styles);

function OrderPage() {
    return (
        <div className={cx('container')}>
            <SideBar />
            <div className={cx('sub-container', 'null')}></div>
            <div className={cx('sub-container', 'content')}>
                <Order />
            </div>
        </div>
    );
}

export default OrderPage;
