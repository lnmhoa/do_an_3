import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './HeaderTop.module.scss';
import logo from '../../logo.png';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <>
            <div className={cx('header-top-container')} style={{ backgroundColor: 'rgb(0, 72, 74)' }}>
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
            <div className={cx('header-top-container', 'nav')}>
                <img src={logo} alt="logo website" style={{ width: 230 }} />
                <div style={{ position: 'relative' }}>
                    <input
                        placeholder="Bạn cần tìm sản phẩm nào..."
                        type="text"
                        style={{
                            width: 700,
                            height: 40,
                            borderRadius: 15,
                            outline: 'none',
                            border: 'none',
                            padding: '5px 10px',
                            boxShadow: '0 4px 6px #ccc',
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        style={{ padding: 5, position: 'absolute', right: 5, top: '20%' }}
                    />
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                    <div
                        style={{
                            display: 'flex',
                            width: 130, 
                            gap: 15,
                            backgroundColor: 'rgb(0, 72, 74)',
                            padding: '10px 8px',
                            borderRadius: 5,
                            alignItems: 'center',
                        }}
                    >
                        <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: 22}} />
                        <span style={{ fontSize: 12, color: 'white' }}>0397364664</span>
                    </div>
                </div>
                <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 25, color: 'rgb(0, 72, 74)'}} />
            </div>
        </>
    );
}

export default HeaderTop;
