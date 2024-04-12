import { FaRegStar, FaPen, FaStar } from 'react-icons/fa';
import styles from './Rating.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Rating(props) {
    const [showFormRating, setShowFormRating] = useState(true);

    // const handleShowFormRating = () => {
    //     setShowFormRating(!showFormRating);
    // };
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('box-1')}>
                    <div className={cx('rating-point')}>
                        <h1>Điểm đánh giá của sản phẩm</h1>
                        <div className={cx('star-box')}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <span>5/5 - 20 lượt đánh giá</span>
                    </div>
                    <div className={cx('create-rating')}>
                        <form action="">
                            <p>Đánh giá của bạn về sản phẩm</p>
                            <div className={cx('star-rating')}>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="3"
                                placeholder="Viết đánh giá của bạn về sản phẩm này..."
                            ></textarea>
                            <button type="submit">Gửi đánh giá</button>
                        </form>
                    </div>
                </div>
                <div className={cx('box-2')}>Danh sách đánh giá khác </div>
            </div>
        </>
    );
}

export default Rating;
