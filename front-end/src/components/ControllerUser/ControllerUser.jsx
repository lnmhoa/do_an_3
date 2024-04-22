import styles from './ControllerUser.module.scss';
import classNames from 'classnames/bind';
import Hello from '../Hello/Hello';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaBox, FaInfoCircle } from 'react-icons/fa';
import DetailComment from '../DetailComment/DetailComment';
import Slides from '../Slider/Slider';

const cx = classNames.bind(styles);

const listOrder = [
    {
        orderID: 'DH002',
        nameProduct: 'Máy tính bảng',
        dateOrder: '2024-03-05',
        priceOrder: 800,
        status: 'Đã giao hàng',
    },
    {
        orderID: 'DH003',
        nameProduct:
            'Tai nghe BluetoothTai nghe BluetoothTai nghe BluetoothTai nghe BluetoothTai nghe BluetoothTai nghe BluetoothTai nghe BluetoothTai nghe Bluetooth',
        dateOrder: '2024-03-10',
        priceOrder: 200,
        status: 'Đã giao hàng',
    },
    {
        orderID: 'DH004',
        nameProduct: 'Ổ cứng di động',
        dateOrder: '2024-03-15',
        priceOrder: 120,
        status: 'Đã huỷ',
    },
    {
        orderID: 'DH005',
        nameProduct: 'Máy ảnh kỹ thuật số',
        dateOrder: '2024-03-20',
        priceOrder: 450,
        status: 'Đã giao hàng',
    },
    {
        orderID: 'DH006',
        nameProduct: 'Bàn phím Gaming',
        dateOrder: '2024-03-25',
        priceOrder: 150,
        status: 'Đã huỷ',
    },
];

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

const renderOrder = (order, index) => (
    <tr key={index}>
        <td>{index + 1}</td>
        <td>{order.orderID}</td>
        <td>
            <div className={cx('hidden-text')} key={index}>
                {order.nameProduct}
            </div>
        </td>
        <td>{order.dateOrder}</td>
        <td>{order.priceOrder} vnđ</td>
    </tr>
);

const LikedProduct = Slides.SliderSale;

function ControllerUser() {
    return (
        <div className={cx('container')}>
            <Hello
                src={require('../../image/System/control.png')}
                valueText={'Tổng quát các hoạt động của bạn tại đây'}
            />
            <div className={cx('box-1')}>
                <div className={cx('info-box')}>
                    <Link to="/profile/info-user">
                        <FaRegEdit className={cx('edit-icon', 'hover-to-yellow')} />
                    </Link>
                    <div className={cx('title')}>
                        <div className={cx('title-icon')}>
                            <FaInfoCircle />
                        </div>
                        <p className={cx('title-text')}>Thông tin cá nhân</p>
                    </div>
                    <div className={cx('content')}>
                        <div>
                            <strong>Họ tên:</strong>
                            <p>Nguyễn Lê Tấn Đạt</p>
                        </div>
                        <div>
                            <strong>Giới tính:</strong>
                            <p>Nam</p>
                        </div>
                        <div>
                            <strong>Số điện thoại:</strong>
                            <p>Nguyễn Lê Tấn Đạt</p>
                        </div>
                        <div>
                            <strong>Ngày sinh:</strong>
                            <p>20/04/2003</p>
                        </div>
                        <div>
                            <strong>Ngày tham gia:</strong>
                            <p>01/03/2024</p>
                        </div>
                        <div>
                            <strong>Địa chỉ mặc định:</strong>
                            <p>Hưng Lợi, Ninh Kiều, Cần Thơ</p>
                        </div>
                        <div>
                            <strong>Ngày tham gia:</strong>
                            <p>01/03/2024</p>
                        </div>
                    </div>
                </div>

                <div className={cx('order-box')}>
                    <div className={cx('title')}>
                        <div className={cx('title-icon')}>
                            <FaBox />
                        </div>
                        <p className={cx('title-text')}>Đơn hàng</p>
                    </div>
                    <div className={cx('content')}>
                        <table className={cx('table-order')}>
                            <thead>
                                <tr>
                                    <th style={{ width: '3%' }}>#</th>
                                    <th style={{ width: '15%' }}>Mã đơn hàng</th>
                                    <th style={{ width: '20%' }}>Sản phẩm</th>
                                    <th style={{ width: '20%' }}>Ngày đặt hàng</th>
                                    <th style={{ width: '20%' }}>Thành tiền</th>
                                </tr>
                            </thead>
                            {listOrder.map((order, index) => renderOrder(order, index))}
                        </table>
                    </div>
                    <Link className={cx('hover-to-yellow')} to="/profile/order">
                        Xem tất cả đơn hàng...
                    </Link>
                </div>
            </div>
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
            {/* <div className={cx('box-3')}>
                <h2>Quản lí bình luận</h2>
                <div>
                    <div className={cx('container-detail-comment')}>
                        <DetailComment
                            isController={false}
                            originalComment={'http://localhost:3000/detail-product/phone'}
                        />
                    </div>
                    <div className={cx('container-detail-comment')}>
                        <DetailComment
                            isController={false}
                            originalComment={'http://localhost:3000/detail-product/phone'}
                        />
                    </div>
                    <div className={cx('container-detail-comment')}>
                        <DetailComment
                            isController={false}
                            originalComment={'http://localhost:3000/detail-product/phone'}
                        />
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default ControllerUser;
