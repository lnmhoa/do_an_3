import React from 'react';
import styles from '../Pagination/Pagination.module.scss';
import className from 'classnames/bind';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const cx = className.bind(styles);

const numberPages = [1, 2, 3, 4, 5];

function Pagination(props) {
    return (
        <div className={cx('container')}>
            <FaAngleLeft />
            {numberPages.map((item, index) => (
                <div key={index} className={cx('numberPage')}>
                    {item}
                </div>
            ))}
            <FaAngleRight />
        </div>
    );
}

export default Pagination;
