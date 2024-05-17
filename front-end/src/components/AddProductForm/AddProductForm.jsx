import React from 'react';
import styles from './AddProductForm.module.scss';
import className from 'classnames/bind';
import { FaEdit } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';

const cx = className.bind(styles);
function AddProductForm({ action, tittle }) {
    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <div>
                    <FaEdit /> <span>{tittle}</span>
                </div>
                <IoMdCloseCircle onClick={action} />
            </div>
            <div className={cx('content')}>
                <div className={cx('container-input-box')}>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Tên sản phẩm</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={cx('container-input-box')}>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Giá bán ra</label>
                        <input type="number" placeholder="VNĐ" />
                    </div>

                    <div className={cx('input-box')}>
                        <label htmlFor="">Số lượng nhập kho</label>
                        <input type="number" />
                    </div>
                </div>
                <div className={cx('container-input-box')}>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Thương hiệu</label>
                        <select name="" id="">
                            <option value="">Thương hiệu 1</option>
                            <option value="">Thương hiệu 2</option>
                            <option value="">Thương hiệu 3</option>
                            <option value="">Thương hiệu 4</option>
                            <option value="">Thương hiệu 5</option>
                        </select>
                    </div>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Phân loại sản phẩm</label>
                        <select name="" id="">
                            <option value="">Loại 1</option>
                            <option value="">Loại 2</option>
                            <option value="">Loại 3</option>
                            <option value="">Loại 4</option>
                            <option value="">Loại 5</option>
                        </select>
                    </div>
                </div>
                <div className={cx('container-input-box')}>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Mô tả sản phẩm</label>
                        <textarea name="" id=""></textarea>
                    </div>
                </div>{' '}
                <div className={cx('container-input-box')}>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Hình ảnh sản phẩm</label>
                        <input className={cx('custom-file-input')} type="file" name="" id="" />
                    </div>
                </div>
                <button>Thêm Sản Phẩm</button>
            </div>
        </div>
    );
}

export default AddProductForm;
