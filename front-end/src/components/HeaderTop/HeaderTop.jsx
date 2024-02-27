import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeaderTop.module.scss';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <>
            <div className={cx('header-top-container')}>
                <ul className={cx('header-top-ul')}>
                    <li className={cx('header-top-li')}>
                        <Link to="/profile">Giới thiệu</Link>
                    </li>
                    <li className={cx('header-top-li')}>
                        <Link to="/detail-product">Tra cứu đơn hàng</Link>
                    </li>
                    <li className={cx('header-top-li')}>
                        <Link to="/profile">Trung tâm bảo hành</Link>
                    </li>
                    <li className={cx('header-top-li')}>
                        <Link to="/profile">Liên hệ</Link>
                    </li>
                    <li className={cx('header-top-li')}>
                        <Link to="/detail-product">Đăng nhập</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default HeaderTop;
