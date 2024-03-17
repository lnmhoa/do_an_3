import styles from './FavoriteProduct.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FavoriteProduct(props) {
    return (
        <div className={cx('hello-div')}>
            <div className={cx('text')}>
                <div>Trang Giỏ H</div>
            </div>
            <img src="" alt="" />
        </div>
    );
}

export default FavoriteProduct;
