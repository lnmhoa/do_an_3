import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeaderTop.module.scss';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <>
            <div className={cx('container')}>
                <ul className={cx('ul')}>
                    <li className={cx('li')}>
                        <Link className={cx('hover-to-yellow', 'link-top')} to="/">
                            Trang chủ
                        </Link>
                    </li>
                    <li className={cx('li')}>
                        <Link className={cx('hover-to-yellow', 'link-top')} to="/profile">
                            Giới thiệu
                        </Link>
                    </li>
                    <li className={cx('li')}>
                        <Link className={cx('hover-to-yellow', 'link-top')} to="/profile/order">
                            Tra cứu đơn hàng
                        </Link>
                    </li>
                    <li className={cx('li')}>
                        <Link className={cx('hover-to-yellow', 'link-top')} to="/profile">
                            Trung tâm bảo hành
                        </Link>
                    </li>
                    <li className={cx('li')}>
                        <Link className={cx('hover-to-yellow', 'link-top')} to="/login">
                            Đăng nhập
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default HeaderTop;
