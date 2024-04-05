import classNames from 'classnames/bind';
import styles from './EvaluateUser.module.scss';
// import FormComment from '../FormComment/FormComment';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
import Hello from '../Hello/Hello';
import { IoMdArrowRoundBack } from 'react-icons/io';

const cx = classNames.bind(styles);

function EvaluateUser() {
    return (
        <>
            <Hello
                src={require('../../image/System/control.png')}
                valueText={'Những đánh giá chân thành của bạn tại đây'}
            />

                <div className={cx('Odetail-top')}>
                    <div className={cx('Odetail-back')}>
                        <IoMdArrowRoundBack />
                    </div>
                    <div className={cx('Odetail-title')}>Chi tiết đơn hàng</div>
                </div>
        </>
    );
}

export default EvaluateUser;
