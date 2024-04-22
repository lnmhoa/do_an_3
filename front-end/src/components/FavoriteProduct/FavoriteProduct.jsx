import styles from './FavoriteProduct.module.scss';
import classNames from 'classnames/bind';
import Slides from '../Slider/Slider';
import Hello from '../Hello/Hello';
import { FaHeart } from 'react-icons/fa';

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

            <div className={cx('box-2')}>
                <div className={cx('title')}>
                    <div className={cx('title-icon')}>
                        <FaHeart />
                    </div>
                    <p className={cx('title-text')}>Sản phẩm yêu thích</p>
                </div>
                <div className={cx('content')}>
                    <LikedProduct sale={false} count={4} width="auto" arrayItem={ProductSlideItem} />
                </div>
            </div>
        </div>
    );
}

export default FavoriteProduct;
