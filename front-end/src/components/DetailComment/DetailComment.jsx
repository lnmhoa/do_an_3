import classNames from 'classnames/bind';
import styles from './DetailComment.module.scss';
import FormComment from '../FormComment/FormComment';
import { Form } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DetailComment() {
    const [showRespone, setShowRespone] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleShowRespone = () => {
        setShowRespone(true);
    };

    const handleHiddenRespone = () => {
        setShowRespone(false);
    };

    const handleShowForm = () => {
        setShowForm(true);
        setShowRespone(false);
    };

    // const handleHiddenForm = () => {
    //     setShowForm(false);
    // };

    console.log(showRespone);

    return (
        <div className={cx('container')}>
            <div className={cx('user-comment')} onMouseOver={handleShowRespone} onMouseLeave={handleHiddenRespone}>
                <img src={require('../../image/System/avatar.png')} alt="" />
                <div className={cx('infor-comment')}>
                    <p>Nguyễn Lê Tấn Đạt</p>
                    <span>27/3/2023</span>
                    <p>Máy này có mở khoá khuôn mặt ko shop</p>
                </div>
            </div>

            <div className={cx('sub-comment')} onMouseOver={handleShowRespone} onMouseLeave={handleHiddenRespone}>
                <div className={cx('user-comment')}>
                    <img src={require('../../image/System/avatar.png')} alt="" />
                    <div className={cx('infor-comment')}>
                        <p>Nguyễn Lê Tấn Đạt</p>
                        <span>27/3/2023</span>
                        <p>Máy này có mở khoá khuôn mặt ko shop</p>
                    </div>
                </div>
                <div className={cx('user-comment')}>
                    <img src={require('../../image/System/avatar.png')} alt="" />
                    <div className={cx('infor-comment')}>
                        <p>Nguyễn Lê Tấn Đạt</p>
                        <span>27/3/2023</span>
                        <p>Máy này có mở khoá khuôn mặt ko shop</p>
                    </div>
                </div>
                <div className={cx('user-comment')}>
                    <img src={require('../../image/System/avatar.png')} alt="" />
                    <div className={cx('infor-comment')}>
                        <p>Nguyễn Lê Tấn Đạt</p>
                        <span>27/3/2023</span>
                        <p>Máy này có mở khoá khuôn mặt ko shop</p>
                    </div>
                </div>
                <div className={cx('user-comment')}>
                    <img src={require('../../image/System/avatar.png')} alt="" />
                    <div className={cx('infor-comment')}>
                        <p>Nguyễn Lê Tấn Đạt</p>
                        <span>27/3/2023</span>
                        <p>Máy này có mở khoá khuôn mặt ko shop</p>
                    </div>
                </div>
                {showRespone && !showForm && (
                    <>
                        <div className={cx('rep-comment')} onClick={handleShowForm}>
                            &#10148; &nbsp;trả lời bình luận
                        </div>
                    </>
                )}
                <br />
                <br />
                {showForm && <FormComment />}
            </div>
        </div>
    );
}

export default DetailComment;
