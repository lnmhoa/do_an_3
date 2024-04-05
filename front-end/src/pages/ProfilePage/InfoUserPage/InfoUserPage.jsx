import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import InfoUser from '../../../components/InfoUser/InfoUser';
import classNames from 'classnames/bind';
import styles from './InfoUserPage.module.scss';

const cx = classNames.bind(styles);

function InfoUserPage() {
    return (
        <div className={cx('container')}>
            <SideBar />
            <div className={cx('sub-container', 'null')}></div>
            <div className={cx('sub-container', 'content')}>
                <InfoUser />
            </div>
        </div>
    );
}

export default InfoUserPage;
