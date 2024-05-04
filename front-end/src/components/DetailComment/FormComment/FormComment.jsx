import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormComment.module.scss';
import FormInput from '../../FormInput/FormInput';

const cx = classNames.bind(styles);
function FormComment(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className={cx('comment-container')}>
            <form onSubmit={handleSubmit} action="">
                <textarea
                    placeholder="Nhận xét của bạn..."
                    className={cx('text-area')}
                    name="content"
                    id=""
                    cols="20"
                    rows="2"
                    required
                ></textarea>
                <div className={cx('sub-box-form-1')}>
                    <span>Để gửi bình lận bạn cần nhập tối thiểu trường họ tên và nội dung</span>
                    <button type="submit">&#10148; &nbsp;Gửi bình luận</button>
                </div>
            </form>
        </div>
    );
}

export default FormComment;
