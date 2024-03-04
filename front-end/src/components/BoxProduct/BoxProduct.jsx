import React from 'react';
import classNames from 'classnames/bind';
import styles from './BoxProduct.module.scss';
import { FaStar } from "react-icons/fa";

const cx = classNames.bind(styles);

var formatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'vnd',
});

function BoxProduct({ name, price, comment, sold }) {
    return (
        <div className={cx('box-product')}>
            <img src={require('../../imgProduct/product.jpg')} alt="" style={{ width: '70%' }} />
            <strong>{name}</strong>
            <div>
                <span style={{ color: 'red', fontSize: 14, fontWeight: 'bold' }}>{formatter.format(price)}</span>{' '}
                <span style={{ textDecoration: 'line-through', fontSize: 11 }}>{formatter.format(price)}</span>
            </div>
            {comment && sold && (
                <div style={{display: 'flex', width: '100%', alignItems: 'center', gap: 10, justifyContent: 'flex-end'}}> 
                    <div style={{ fontSize: 8, fontWeight: '600', fontStyle: 'italic'}}>{comment} <FaStar color='yellow' /></div>
                    <div style={{ fontSize: 8, fontWeight: '600', fontStyle: 'italic'}}>Đã bán: {sold} </div>
                </div>
            )}
        </div>
    );
}

export default BoxProduct;
