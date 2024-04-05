import styles from './FavoriteProduct.module.scss';
import classNames from 'classnames/bind';
import Slides from '../Slider/Slider';
import Hello from '../Hello/Hello';

const cx = classNames.bind(styles);

const LikedProduct = Slides.SliderSale;

function FavoriteProduct(props) {
    return (
        <>
            <Hello
                src={require('../../image/System/favorite.png')}
                valueText={'Danh sách sản phẩm yêu thích của bạn tại đây'}
            />
            
               
            <div className={cx('container')}>
                    <LikedProduct sale={false} count={4} width="1000px" />
                </div>
            
        </>
    );
}

export default FavoriteProduct;
