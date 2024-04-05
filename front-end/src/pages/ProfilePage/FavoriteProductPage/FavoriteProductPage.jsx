import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import FavoriteProduct from '../../../components/FavoriteProduct/FavoriteProduct';
import classNames from 'classnames/bind';
import styles from './FavoriteProductPage.module.scss';

const cx = classNames.bind(styles);

function FavoriteProductPage() {
    return (
        <div className={cx('container')}>
            <SideBar />
            <div className={cx('sub-container', 'null')}></div>
            <div className={cx('sub-container', 'content')}>
                <FavoriteProduct />
            </div>
        </div>
    );
}

export default FavoriteProductPage;
