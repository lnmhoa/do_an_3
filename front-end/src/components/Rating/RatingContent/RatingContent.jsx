import classNames from 'classnames/bind';
import styles from './RatingContent.module.scss';
import { FaStar } from 'react-icons/fa';

const cx = classNames.bind(styles);

function RatingContent(props) {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>Đánh giá này được trình bày bởi ....</div>
            <div className={cx('info-rating')}>
                <div className={cx('user')}>
                    <img src={require('../../../image/System/avatar.png')} alt="" />
                    <strong>Nguyễn phước thịnh</strong>
                    <span>-</span>
                    <span>22/2/2022</span>
                </div>
                <div className={cx("star")}>
                    {[1, 2, 3, 4, 5].map(() => (
                        <FaStar />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RatingContent;
