import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './BoxProduct.module.scss';
import { FaSlidersH, FaStar } from 'react-icons/fa';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

var formatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'vnd',
});

function BoxProduct({ name, price, rate, sold, compare = false }) {
    const [favorite, setFavourite] = useState(false);
    const pathProduct = `/detail-product/${name.replace(' ', '_')}`;

    const handleFavorite = (e) => {
        e.preventDefault();
        setFavourite(!favorite);
    };

    return (
        // <div>
        <Link to={pathProduct} className={cx('box-product')}>
            <img src={require('../../image/Upload/Product/product.jpg')} alt="" />
            <div className={cx('heart')} onClick={handleFavorite}>
                {favorite ? <FaHeart /> : <FaRegHeart />}
            </div>
            <div className={cx('sub-container')}>
                <strong>{name}</strong>
                <div className={cx('name-price')}>
                    <span>{formatter.format(price)}</span> <span>{formatter.format(price)}</span>
                </div>

                {rate && sold && (
                    <div className={cx('sold-rate')}>
                        <span>Đã bán: {sold}</span>
                        <span>
                            {rate}
                            <FaStar style={{ color: 'var(--color-2)' }} />
                        </span>
                    </div>
                )}
            </div>
            {compare && (
                <div className={cx('compare-btn')}>
                    So Sánh <FaSlidersH />
                </div>
            )}
            {/* <ToastContainer/> */}
        </Link>
    );
}

export default BoxProduct;
