import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FaCartShopping, FaUser } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import styles from './HeaderTop-2.module.scss';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <>
            <div className={cx('container', 'nav')}>
                <Link to="/">
                    <img src={require('../../image/System/logo.png')} alt="logo website" />
                </Link>
                <div className={cx('search')}>
                    <input className={cx('search-input')} placeholder="Bạn cần tìm sản phẩm nào..." type="text" />
                    <div className={cx('icon-search')}>
                        <FaSearch />
                    </div>
                </div>
                <Link className={cx('cart-icon')} to="/cart">
                    <FaCartShopping />
                </Link>
                <div className={cx('user')}>
                    <Link to="/profile" className={cx('user')}>
                        <FaUser />
                        <span>0397364664</span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HeaderTop;
