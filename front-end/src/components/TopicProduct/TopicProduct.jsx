import React from 'react';
import classNames from 'classnames/bind';
import styles from './TopicProduct.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function TopicProduct({ topicName}) {
    return (
        <div className={cx('container')}>
            <div>
                <div>
                    <Link>{topicName}</Link>
                </div>
            </div>
        </div>
    );
}

export default TopicProduct;
