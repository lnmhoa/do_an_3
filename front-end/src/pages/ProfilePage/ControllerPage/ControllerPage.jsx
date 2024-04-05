import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import classNames from 'classnames/bind';
import ControllerUser from '../../../components/ControllerUser/ControllerUser';
import styles from './ControllerPage.module.scss';

const cx = classNames.bind(styles);

function ControllerPage() {
    return (
        <div className={cx('container')}>
            <SideBar />
            <div className={cx('sub-container', 'null')}></div>
            <div className={cx('sub-container', 'content')}>
                <ControllerUser />
            </div>
        </div>
    );
}

export default ControllerPage;
