import styles from './CartUser.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CartUser(props) {
    return (
        <div className={cx('hello-div')}>
            <div className={cx('text')}>
                <div>Trang Giỏ Hàng</div>
            </div>
            <img src="" alt="" />
        </div>
    );
}

export default CartUser;
