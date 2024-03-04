import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { BsPersonCircle, BsCart3, BsSearch } from 'react-icons/bs';
import styles from './HeaderTop.module.scss';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <>
            <div className={cx('container')} style={{ backgroundColor: 'rgb(0, 72, 74)' }}>
                <ul className={cx('ul')}>
                    <li className={cx('li')}>
                        <Link className={cx('hover-to-yellow', 'link-top')} to="/profile">Giới thiệu</Link>
                    </li>
                    <li className={cx('li')}>
                        <Link className={cx('hover-to-yellow', 'link-top')} to="/detail-product">Tra cứu đơn hàng</Link>
                    </li>
                    <li className={cx('li')}>
                        <Link className={cx('hover-to-yellow', 'link-top')} to="/">Trung tâm bảo hành</Link>
                    </li>
                    <li className={cx('li')}>
                        <Link className={cx('hover-to-yellow', 'link-top')} to="/profile">Liên hệ</Link>
                    </li>
                    <li className={cx('li')}>
                        <Link className={cx('hover-to-yellow', 'link-top')} to="/detail-product">Đăng nhập</Link>
                    </li>
                </ul>
            </div>
            <div className={cx('container', 'nav')}>
                <img src={require('../../imgSystem/logo.png')} alt="logo website" style={{ width: 230 }} />
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
                    <BsSearch style={{ padding: 5, position: 'absolute', right: 5, top: '20%', fontSize: '25px' }} />
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                    <div
                        className={cx('user')}
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
                        <BsPersonCircle style={{ color: 'white', fontSize: 22 }} />
                        <span style={{ fontSize: 12, color: 'white' }}>0397364664</span>
                    </div>
                </div>
                <BsCart3 style={{ fontSize: 25, color: 'rgb(0, 72, 74)', cursor: 'pointer' }} />
            </div>
        </>
    );
}

export default HeaderTop;
