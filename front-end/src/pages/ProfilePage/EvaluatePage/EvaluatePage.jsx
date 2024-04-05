import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import EvaluateUser from '../../../components/EvaluateUser/EvaluateUser';
import classNames from 'classnames/bind';
import styles from './EvaluatePage.module.scss';

const cx = classNames.bind(styles);

function EvaluatePage() {
    return (
        <div className={cx('container')}>
            <SideBar />
            <div className={cx('sub-container', 'null')}></div>
            <div className={cx('sub-container', 'content')}>
                <EvaluateUser />
            </div>
        </div>
    );
}

export default EvaluatePage;
