import styles from './FavoriteProduct.module.scss';
import classNames from 'classnames/bind';
import Hello from '../Hello/Hello';

const cx = classNames.bind(styles);

function FavoriteProduct(props) {
    return (
        <>
            <Hello
                src={require('../../image/System/favorite.png')}
                valueText={'Danh sách sản phẩm yêu thích của bạn tại đây'}
            />
        </>
    );
}

export default FavoriteProduct;
