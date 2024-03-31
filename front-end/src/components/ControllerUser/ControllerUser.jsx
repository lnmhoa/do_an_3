import styles from './ControllerUser.module.scss';
import classNames from 'classnames/bind';
import Hello from '../Hello/Hello';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DetailComment from '../DetailComment/DetailComment';
import Slides from '../Slider/Slider';

const cx = classNames.bind(styles);

const LikedProduct = Slides.SliderSale;

function ControllerUser() {
    return (
        <>
            <Hello
                src={require('../../image/System/control.png')}
                valueText={'Tổng quát các hoạt động của bạn tại đây'}
            />
            <div className={cx('box-1')}>
                <div className={cx('info-box')}>
                    <Link>
                        <FaRegEdit className={cx('edit-icon')} />
                    </Link>
                    <h2>Thông tin của bạn</h2>
                    <div>
                        <strong>Họ tên:</strong>
                        <p>Nguyễn Lê Tấn Đạt</p>
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

                <div className={cx('order-box')}>
                    <h2>Đơn hàng của bạn</h2>

                    <table className={cx('table-order')}>
                        <tr>
                            <th>#</th>
                            <th>Mã đơn hàng</th>
                            <th>Ngày đặt hàng</th>
                            <th>Tổng tiền</th>
                            <th>Giảm giá</th>
                            <th>Sản phẩm đặt hàng</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className={cx('box-2')}>
                <h2>Sản phẩm yêu thích</h2>
                <div>
                    <LikedProduct sale="false" count={4} width="auto" />
                </div>
            </div>
            <div className={cx('box-3')}>
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
            </div>
        </>
    );
}

export default ControllerUser;
