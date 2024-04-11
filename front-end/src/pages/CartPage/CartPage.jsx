import FormInput from '../../components/FormInput/FormInput';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaUser, FaPhoneAlt, FaMoneyCheck, FaInfoCircle, FaPlus, FaMinus } from 'react-icons/fa';
import { FaLocationDot, FaList, FaArrowLeftLong } from 'react-icons/fa6';
import styles from './CartPage.module.scss';

const cx = classNames.bind(styles);

const orderData = {
    ID: 'DH001',
    orderStatus: 'Đã xác nhận',
    orderDate: '20/5/2023 8:19',
    orderItem: [
        {
            itemName: '1 RAM PC ADATA XPG D50 RGB 8GB (1x8GB) 3200MHz DDR4 XÁM AX4U32008G16A-ST50',
            amount: 23,
            price: 10000000,
        },
        {
            itemName: '2 RAM PC ADATA XPG D50 RGB 8GB (1x8GB) 3200MHz DDR4 XÁM AX4U32008G16A-ST50',
            amount: 20,
            price: 10000000,
        },
        {
            itemName: '3 RAM PC ADATA XPG D50 RGB 8GB (1x8GB) 3200MHz DDR4 XÁM AX4U32008G16A-ST50',
            amount: 10,
            price: 10000000,
        },
        {
            itemName: '4 RAM PC ADATA XPG D50 RGB 8GB (1x8GB) 3200MHz DDR4 XÁM AX4U32008G16A-ST50',
            amount: 3,
            price: 10000000,
        },
    ],
};

function CartPage({ title }) {
    const [values, setValues] = useState({
        tel: '',
    });

    const [orderList, setOrderList] = useState(orderData);

    const handleDecrease = (index) => {
        const updatedOrderItem = [...orderList.orderItem];
        if (updatedOrderItem[index].amount > 1) {
            updatedOrderItem[index].amount -= 1;
        }

        setOrderList({
            ...orderList,
            orderItem: updatedOrderItem,
        });
    };

    const handleIncrease = (index) => {
        const updatedOrderItem = [...orderList.orderItem];
        updatedOrderItem[index].amount += 1;

        setOrderList({
            ...orderList,
            orderItem: updatedOrderItem,
        });
    };

    const handleDelete = (index) => {
        const updatedOrderItem = [...orderList.orderItem];
        updatedOrderItem.splice(index, 1);
        setOrderList({
            ...orderList,
            orderItem: updatedOrderItem,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        if (e.target.name === 'tel') {
            e.target.value = e.target.value.replace(/\D/g, '');
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <div className={cx('container')}>
            <div className={cx('Cart')}>
                <div className={cx('Cart-top')}>
                    <Link to="/profile/order">
                        <FaArrowLeftLong />
                    </Link>
                    <div className={cx('Cart-title')}>Giỏ hàng của bạn</div>
                </div>
                <div className={cx('Cart-bottom')}>
                    <div className={cx('Cart-product')}>
                        <div className={cx('payment-info-title')}>
                            <div className={cx('title-icon')}>
                                <FaList />
                            </div>
                            <p className={cx('title-text')}>Thông tin sản phẩm</p>
                        </div>

                        <div className={cx('Cart-list')}>
                            <div className={cx('Block-item')}>
                                {orderList.orderItem.map((item, index) => {
                                    return (
                                        <div key={index} className={cx('Order-item')}>
                                            <button className={cx('deleteBtn')} onClick={handleDelete}>
                                                Delete
                                            </button>
                                            <div className={cx('Order-item_img')}>
                                                <img src={require('../../image/Upload/Product/product.jpg')} alt="" />
                                            </div>
                                            <div className={cx('Order-item_info')}>
                                                <div className={cx('Order-item_info-title')}>{item.itemName}</div>
                                                <div className={cx('Order-item_info-sub-title')}>
                                                    <div className={cx('Order-item_info-quantity')}>
                                                        Số lượng:{' '}
                                                        <div className={cx('setAmount')}>
                                                            <FaMinus onClick={() => handleDecrease(index)} />
                                                            <p>{item.amount}</p>
                                                            <FaPlus onClick={() => handleIncrease(index)} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('Order-item_info-price')}>
                                                    <div className={cx('price-item')}>
                                                        {item.price}
                                                        <p>999.000đ</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={cx('payment-info')}>
                        <div className={cx('payment-info-title')}>
                            <div className={cx('title-icon')}>
                                <FaMoneyCheck />
                            </div>
                            <p className={cx('title-text')}>Thông tin thanh toán</p>
                        </div>

                        <div className={cx('payment-info-content')}>
                            <div className={cx('content-item1')}>
                                <p className={cx('title-item')}>Tổng tiền sản phẩm:</p>
                                <p>1.000.000đ</p>
                            </div>
                            <div className={cx('content-item1')}>
                                <p className={cx('title-item')}>Giảm giá:</p>
                                <p>- 200.000đ</p>
                            </div>
                            <div
                                className={cx('content-item1')}
                                style={{ borderBottom: '1px solid #bbbbbb', paddingBottom: '12px' }}
                            >
                                <p className={cx('title-item')}>Phí vận chuyển:</p>
                                <p>Miễn phí</p>
                            </div>
                            <div className={cx('content-item1')} style={{ paddingTop: '12px' }}>
                                <p className={cx('title-item')}>Phải thanh toán:</p>
                                <p style={{ fontWeight: '700' }}>800.000đ</p>
                            </div>
                            <div className={cx('content-item1')}>
                                <p className={cx('title-item')}>Đã thanh toán:</p>
                                <p style={{ fontWeight: '700', color: '#54d62c' }}>800.000đ</p>
                            </div>
                        </div>
                    </div>

                    <div className={cx('payment-info')}>
                        <div className={cx('payment-info-title')}>
                            <div className={cx('title-icon')}>
                                <FaInfoCircle />
                            </div>
                            <p className={cx('title-text')}>Thông tin tài khoản</p>
                        </div>

                        <div className={cx('payment-info-content')}>
                            <div className={cx('content-item2')}>
                                <div className={cx('item-icon')}>
                                    <FaUser style={{ fontSize: '20px' }} />
                                </div>
                                <div className={cx('title-text')}>Trương Đạt</div>
                            </div>
                            <div className={cx('content-item2')}>
                                <div className={cx('item-icon')}>
                                    <FaPhoneAlt style={{ fontSize: '20px' }} />
                                </div>
                                <div className={cx('title-text')}>0352039701</div>
                            </div>
                            <div className={cx('content-item2')}>
                                <div className={cx('item-icon')}>
                                    <FaLocationDot style={{ fontSize: '20px' }} />
                                </div>
                                <div className={cx('title-text')}>
                                    Qua cầu bà bộ quẹo phải Nhà trọ Hồng Loan, khu vực 4, Nguyễn Văn Linh, Phường Long
                                    Hoà, Quận Bình Thuỷ, Cần Thơ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('order-btn')}>
                    <button type="button">Xác nhận đặt hàng</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
