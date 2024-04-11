import classNames from 'classnames/bind';
import SideBar from '../../../components/SideBar/SideBar';
import { useEffect } from 'react';
import { FaUser, FaPhoneAlt, FaMoneyCheck, FaInfoCircle, FaBox, FaCheckCircle, FaShippingFast } from 'react-icons/fa';
import { FaLocationDot, FaDropbox, FaList, FaArrowLeftLong } from 'react-icons/fa6';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './OrderDetail.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

const elements = [
    {
        icon: <FaBox />,
        status: 'Đặt hàng thành công',
    },
    {
        icon: <FaCheckCircle />,
        status: 'Đã xác nhận',
    },
    {
        icon: <FaShippingFast />,
        status: 'Đang vận chuyển',
    },
    {
        icon: <FaDropbox />,
        status: 'Đã giao hàng',
    },
];

const orderData = {
    ID: 'DH001',
    orderStatus: 'Đã xác nhận',
    orderDate: '20/5/2023 8:19',
    orderItem: [
        {
            itemName: 'RAM PC ADATA XPG D50 RGB 8GB (1x8GB) 3200MHz DDR4 XÁM AX4U32008G16A-ST50',
            amout: 23,
            price: 10000000,
        },
        {
            itemName: 'RAM PC ADATA XPG D50 RGB 8GB (1x8GB) 3200MHz DDR4 XÁM AX4U32008G16A-ST50',
            amout: 23,
            price: 10000000,
        },
        {
            itemName: 'RAM PC ADATA XPG D50 RGB 8GB (1x8GB) 3200MHz DDR4 XÁM AX4U32008G16A-ST50',
            amout: 23,
            price: 10000000,
        },
        {
            itemName: 'RAM PC ADATA XPG D50 RGB 8GB (1x8GB) 3200MHz DDR4 XÁM AX4U32008G16A-ST50',
            amout: 23,
            price: 10000000,
        },
    ],
};

function OrderDetail({ title }) {
    const notify = (title) => toast(`Chào mừng đến với ${title}`);
    useEffect(() => {
        document.title = title;
        notify(title);
    }, [title]);

    const valueToNumber = (value) => {
        switch (value) {
            case 'Đã giao hàng':
                return 4;
                break;
            case 'Đang vận chuyển':
                return 3;
                break;
            case 'Đã xác nhận':
                return 2;
                break;
            default:
                return 1;
        }
    };

    const [statusValue, setStatusValue] = useState(valueToNumber(orderData.orderStatus));

    return (
        <>
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('sub-container', 'null')}></div>
                <div className={cx('sub-container', 'content')}>
                    <div className={cx('Odetail')}>
                        <div className={cx('Odetail-top')}>
                            <Link to="/profile/order">
                                <FaArrowLeftLong />
                            </Link>
                            <div className={cx('Odetail-title')}>Chi tiết đơn hàng</div>
                        </div>
                        <div className={cx('Odetail-bottom')}>
                            <div className={cx('Odetail-id')}>
                                <p>
                                    Mã đơn hàng: <strong>DH001</strong>
                                </p>
                                <div className={cx('Odetail-status')}>{orderData.orderStatus}</div>
                            </div>

                            <div className={cx('Odetail-date')}>20/5/2023 8:19</div>

                            <div className={cx('Odetail-product')}>
                                <div className={cx('payment-info-title')}>
                                    <div className={cx('title-icon')}>
                                        <FaList />
                                    </div>
                                    <p className={cx('title-text')}>Thông tin sản phẩm</p>
                                </div>
                                <div className={cx('Odetail-list')}>
                                    <div className={cx('Block-item')}>
                                        {orderData.orderItem.map((item, index) => {
                                            return (
                                                <div key={index} className={cx('Order-item')}>
                                                    <div className={cx('Order-item_img')}>
                                                        <img
                                                            src={require('../../../image/Upload/Product/product.jpg')}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={cx('Order-item_info')}>
                                                        <div className={cx('Order-item_info-title')}>
                                                            {item.itemName}
                                                        </div>
                                                        <div className={cx('Order-item_info-sub-title')}>
                                                            <div className={cx('Order-item_info-quantity')}>
                                                                Số lượng: <p>{item.amout}</p>
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

                            <div className={cx('shipping-status')}>
                                {elements.map((item, index) => {
                                    return (
                                        <div className={cx('group-icon', { active: index < statusValue })}>
                                            <div>{item.icon}</div>
                                            <p>{item.status}</p>
                                            <p>{item.time}</p>
                                        </div>
                                    );
                                })}
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
                                            Qua cầu bà bộ quẹo phải Nhà trọ Hồng Loan, khu vực 4, Nguyễn Văn Linh,
                                            Phường Long Hoà, Quận Bình Thuỷ, Cần Thơ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('cancel-btn')}>
                            <button type="button">Hủy đơn hàng</button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}

export default OrderDetail;
