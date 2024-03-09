import React from 'react';
import classNames from 'classnames/bind';
import styles from './TopicProduct.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function TopicProduct({ topicName }) {
    return (
        <div className={cx('container')}>
            <div>
                <div>
                    <Link to="/list-product">{topicName}</Link>
                </div>
            </div>
            <Link to="/list-product" className={cx('show-all')}>
                Xem tất cả
            </Link>
        </div>
    );
}

export default TopicProduct;
