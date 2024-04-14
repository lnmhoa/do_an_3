import { FaRegStar, FaPen, FaStar } from 'react-icons/fa';
import styles from './Rating.module.scss';
import classNames from 'classnames/bind';
import RatingContent from './RatingContent/RatingContent';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const cx = classNames.bind(styles);

function Rating(props) {
    // const [showFormRating, setShowFormRating] = useState(true);

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

                    <div id="modal1" className={cx('create-rating')}>
                        <form action="">
                            <Modal />
                        </form>
                    </div>
                </div>
                <div className={cx('box-2')}>
                    <RatingContent />
                    <RatingContent />
                    <RatingContent />
                    <RatingContent />
                    <RatingContent />
                    <RatingContent />
                </div>
            </div>
        </>
    );
}

export default Rating;
