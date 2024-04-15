import styles from './FavoriteProduct.module.scss';
import classNames from 'classnames/bind';
import Slides from '../Slider/Slider';
import Hello from '../Hello/Hello';

const cx = classNames.bind(styles);

const LikedProduct = Slides.SliderSale;

const ProductSlideItem = [
    {
        name: 'Iphone 15',
        price: '10000000',
    },
    {
        name: 'Iphone 14',
        price: '10000000',
    },
    {
        name: 'Iphone 13',
        price: '10000000',
    },
    {
        name: 'Iphone 12',
        price: '10000000',
    },
    {
        name: 'Iphone 11',
        price: '10000000',
    },
    {
        name: 'Iphone 10',
        price: '10000000',
    },
    {
        name: 'Iphone 9',
        price: '10000000',
    },
    {
        name: 'Iphone 8',
        price: '10000000',
    },
];

function FavoriteProduct(props) {
    return (
        <div className={cx('container')}>
            <Hello
                src={require('../../image/System/favorite.png')}
                valueText={'Danh sách sản phẩm yêu thích của bạn tại đây'}
            />

            <div className={cx('sub-container')}>
                <LikedProduct sale={false} count={4} width="1000px" arrayItem={ProductSlideItem} />
            </div>
        </div>
    );
}

export default FavoriteProduct;
