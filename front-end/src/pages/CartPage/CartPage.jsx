import FormInput from '../../components/FormInput/FormInput';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaUser, FaPhoneAlt, FaMoneyCheck, FaInfoCircle, FaPlus, FaMinus } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
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

const inputInfoUser = [
    {
        id: 1,
        name: 'userOrderName',
        type: 'text',
        placeholder: 'Vd: Nguyễn Văn A',
        label: 'Họ tên người nhận *',
        required: true,
        icon: FaUser,
    },
    {
        id: 2,
        name: 'tel',
        type: 'text',
        placeholder: 'Vd: 0987345621',
        errorMessage: 'Vui lòng nhập số diện thoại hợp lệ!',
        label: 'Số điện thoại *',
        pattern: '[0-9]*',
        required: true,
        icon: FaPhoneAlt,
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        placeholder: 'Vd: username@gmail.com',
        errorMessage: 'Vui lòng nhập đúng email!',
        label: 'Email xác nhận *',
        pattern: '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i;',
        required: true,
        icon: MdEmail,
    },
    {
        id: 6,
        name: 'Address',
        type: 'text',
        placeholder: 'Vd: 24/1 đường 30/4, Hưng Lợi, Ninh Kiều, Cần Thơ',
        label: 'Địa chỉ nhận hàng *',
        required: true,
        icon: FaLocationDot,
    },
];

function CartPage({ title }) {
    // useState
    const [values, setValues] = useState({
        tel: '',
    });

    const [orderList, setOrderList] = useState(orderData);

    // handle functions
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
        console.log('aa');
    };

    const handleChangeInputTel = (e) => {
        if (e.target.name === 'tel') {
            e.target.value = e.target.value.replace(/\D/g, '');
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    //useEffect
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
                            <p className={cx('title-text')}>Danh sách sản phẩm</p>
                        </div>

                        <div className={cx('Cart-list')}>
                            <div className={cx('Block-item')}>
                                {orderList.orderItem.map((item, index) => {
                                    return (
                                        <div key={index} className={cx('Order-item')}>
                                            <button className={cx('deleteBtn')} onClick={handleDelete}>
                                                Xoá sản phẩm
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
                            <p className={cx('title-text')}>Thông tin nhận hàng</p>
                        </div>

                        <div className={cx('payment-info-content')}>
                            <i className={cx('note')}>Điền các thông tin nhận hàng tại đây. * là các trường bắt buộc</i>
                            {inputInfoUser.map((item, index) => {
                                // const Icon = item.icon;
                                return (
                                    <div className={cx('content-item2')}>
                                        {/* <div className={cx('item-icon')}>
                                            <Icon style={{ fontSize: '20px' }} />
                                            <p>{item.label}</p>
                                        </div> */}
                                        <div className={cx('title-text')}>
                                            <FormInput
                                                placeholder={item.placeholder}
                                                name={item.name}
                                                type={item.type}
                                                errorMessage={item.errorMessage}
                                                label={item.label}
                                                pattern={item.pattern}
                                                required={item.required}
                                                onChange={handleChangeInputTel}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx('order-btn')}>
                    <button type="button" onClick={handleSubmit}>
                        Xác nhận đặt hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
