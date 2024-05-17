import React from 'react';
import styles from '../NavAdmin/NavAdmin.module.scss';
import className from 'classnames/bind';
import { IoIosAddCircle } from 'react-icons/io';

const cx = className.bind(styles);

function NavAdmin({action}) {
    return (
        <div className={cx('container')}>
            <div className={cx('add-nav')} onClick={action}>
                <IoIosAddCircle />
                <div>Thêm sản phẩm</div>
            </div>
            <div className={cx('add-nav')}>
                <IoIosAddCircle />
                <div>More option</div>
            </div>
            <div className={cx('add-nav')}>
                <IoIosAddCircle />
                <div>More option</div>
            </div>
        </div>
    );
}

export default NavAdmin;
