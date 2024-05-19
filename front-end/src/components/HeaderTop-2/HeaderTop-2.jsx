import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FaCartShopping, FaUser } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import styles from './HeaderTop-2.module.scss';

const cx = classNames.bind(styles);

function HeaderTop() {

    const user = useSelector((state) => state.user)

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
                    {user?.fullName ? (
                        <Link to="/profile" className={cx('user')}>
                        <FaUser />     
                            <span>{user?.fullName}</span>               
                    </Link>
                    ) : (
                        <Link to="/login" className={cx('user')}>
                        <FaUser />
                            <span>Đăng nhập</span>     
                    </Link>
                    )}
                </div>
            </div>
        </>
    );
}

export default HeaderTop;
