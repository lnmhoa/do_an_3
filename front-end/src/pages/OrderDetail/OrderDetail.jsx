import styles from './OrderDetail.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../components/SideBar/SideBar';
import { useEffect } from 'react';
import { IoIosArrowRoundBack, IoIosInformationCircle } from 'react-icons/io';
import { MdOutlinePayments } from 'react-icons/md';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot, FaDropbox } from 'react-icons/fa6';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { GiConfirmed } from 'react-icons/gi';
import { LiaShippingFastSolid } from 'react-icons/lia';

const cx = classNames.bind(styles);

function OrderDetail({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('sub-container', 'null')}></div>
                <div className={cx('sub-container', 'content')}>
                    <div className={cx('Odetail')}>
                        <div className={cx('Odetail-top')}>
                            <div className={cx('Odetail-back')}>
                                <IoIosArrowRoundBack />
                            </div>
                            <div className={cx('Odetail-title')}>Chi tiết đơn hàng</div>
                        </div>
                        <div className={cx('Odetail-bottom')}>
                            <div className={cx('Odetail-id')}>
                                <p>
                                    Mã đơn hàng: <strong>DH001</strong>
                                </p>
                                <div className={cx('Odetail-status')}>Đã giao hàng</div>
                            </div>

                            <div className={cx('Odetail-date')}>20/5/2023 8:19</div>

                            <div className={cx('Odetail-product')}>
                                <div className={cx('Odetail-list')}>
                                    <div className={cx('Block-item')}>
                                        <div className={cx('Order-item')}>
                                            <div className={cx('Order-item_img')}>
                                                <img src={require('../../image/Upload/Product/product.jpg')} alt="" />
                                            </div>
                                            <div className={cx('Order-item_info')}>
                                                <div className={cx('Order-item_info-title')}>
                                                    RAM PC ADATA XPG D50 RGB 8GB (1x8GB) 3200MHz DDR4 XÁM
                                                    AX4U32008G16A-ST50
                                                </div>
                                                <div className={cx('Order-item_info-sub-title')}>
                                                    <div className={cx('Order-item_info-quantity')}>
                                                        Số lượng: <p>15</p>
                                                    </div>
                                                </div>
                                                <div className={cx('Order-item_info-price')}>
                                                    <div className={cx('price-item')}>
                                                        499.000đ
                                                        <p>999.000đ</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={cx('Order-item')}>
                                            <div className={cx('Order-item_img')}>
                                                <img src={require('../../image/Upload/Product/product.jpg')} alt="" />
                                            </div>
                                            <div className={cx('Order-item_info')}>
                                                <div className={cx('Order-item_info-title')}>
                                                    RAM PC ADATA XPG D50 RGB 8GB (1x8GB) 3200MHz DDR4 XÁM
                                                    AX4U32008G16A-ST50
                                                </div>
                                                <div className={cx('Order-item_info-sub-title')}>
                                                    <div className={cx('Order-item_info-quantity')}>
                                                        Số lượng: <p>15</p>
                                                    </div>
                                                </div>
                                                <div className={cx('Order-item_info-price')}>
                                                    <div className={cx('price-item')}>
                                                        499.000đ
                                                        <p>999.000đ</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('shipping-status')}>
                                <div className={cx('shipping-status-form')}>
                                    <div className={cx('group-icon-first')}>
                                        <div>
                                            <BsFillBoxSeamFill />
                                        </div>
                                        <p className={cx('group-icon-status')}>Đặt hàng <br /> thành công</p>
                                        <p className={cx('group-icon-time')}  style={{color: '#4a4a4a'}}>20/5/2023 <br /> 8:19</p>
                                    </div>
                                </div>
                                <div className={cx('shipping-status-form')}>
                                    <div className={cx('group-icon')}>
                                        <div>
                                            <GiConfirmed />
                                        </div>
                                        <p className={cx('group-icon-status')}>Đã <br /> xác nhận</p>
                                    </div>
                                </div>
                                <div className={cx('shipping-status-form')}>
                                    <div className={cx('group-icon')}>
                                        <div>
                                            <LiaShippingFastSolid />
                                        </div>
                                        <p className={cx('group-icon-status')}>Đang <br /> vận chuyển</p>
                                        <p className={cx('group-icon-time')}  style={{color: '#4a4a4a'}}>20/5/2023 <br /> 8:19</p>
                                    </div>
                                </div>
                                <div className={cx('shipping-status-form')}>
                                    <div className={cx('group-icon')} style={{marginRight: '0'}}>
                                        <div>
                                            <FaDropbox />
                                        </div>
                                        <p className={cx('group-icon-status')}>Đã <br /> giao hàng</p>
                                        <p className={cx('group-icon-time')} style={{color: '#4a4a4a'}}>20/5/2023 <br /> 8:19</p>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('payment-info')}>
                                <div className={cx('payment-info-title')}>
                                    <div className={cx('title-icon')}>
                                        <MdOutlinePayments />
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
                                        <IoIosInformationCircle />
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetail;
