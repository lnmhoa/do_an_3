import styles from './CartUser.module.scss';
import classNames from 'classnames/bind';
import Hello from '../Hello/Hello';
const cx = classNames.bind(styles);

function CartUser(props) {
    // const date = new Date(new Date().getTime());
    // const day = date.getDate();
    // const month = date.getMonth() + 1; // Tháng tính từ 0 nên cần cộng thêm 1
    // const year = date.getFullYear();
    // const todayDate = year + '-' + month + '-' + day;
    return (
        <>
            <Hello
                src={require('../../image/System/cart.png')}
                valueText={'Kiểm tra thông tin đơn hàng của bạn tại đây'}
            />
            {/* <div className={cx('box-1')}>
                <div className={cx('sub-box-1')}>
                    <span>20</span>
                    <span>Đơn Hàng</span>
                </div>
                <div className={cx('sub-box-1')}>
                    <span>200K</span>
                    <span>Tổng chi tiêu</span>
                </div>
            </div> */}

            <div className={cx('box-0')}>
                <div className={cx('box-2')}>
                    <input type="date" defaultValue="2024-01-01" min="2024-01-01" />
                    <span>&rarr;</span>
                    <input type="date" defaultValue="2024-01-01" min="2024-01-01" />
                </div>

                <div className={cx('box-3')}>
                    <div className={cx('sub-box-3', 'active')}>Tất cả</div>
                    <div className={cx('sub-box-3')}>Chờ xác nhận</div>
                    <div className={cx('sub-box-3')}>Đã xác nhận</div>
                    <div className={cx('sub-box-3')}>Đang vận chuyển</div>
                    <div className={cx('sub-box-3')}>Đã giao hàng</div>
                    <div className={cx('sub-box-3')}>Đã huỷ</div>
                </div>
            </div>

            {/* <div className={cx('box-4')}>
                <div className={cx('cart')}>
                    <img src={require('../../image/System/avatar.png')} alt="" />
                    <div className={cx('cart-info')}>
                        <p>Điện thoại Samsung Galaxy S23 Ultra 12GB/512GB - Chính hãng</p>
                        <span>01/01/2024 12:23</span>
                        <div className={cx('status')}>Đã giao hàng</div>
                        <strong>15.000.000đ</strong>
                    </div>
                    <div className={cx('seeDetail')}>Xem chi tiết</div>
                </div>
                <div className={cx('cart')}>
                    <img src={require('../../image/System/avatar.png')} alt="" />
                    <div className={cx('cart-info')}>
                        <p>Điện thoại Samsung Galaxy S23 Ultra 12GB/512GB - Chính hãng</p>
                        <span>01/01/2024 12:23</span>
                        <strong>15.000.000 vnđ</strong>
                        <div className={cx('status')}>Trạng thái giao hàng</div>
                    </div>
                    <div className={cx('seeDetail')}>Xem chi tiết</div>
                </div>{' '}
                <div className={cx('cart')}>
                    <img src={require('../../image/System/avatar.png')} alt="" />
                    <div className={cx('cart-info')}>
                        <p>Điện thoại Samsung Galaxy S23 Ultra 12GB/512GB - Chính hãng</p>
                        <span>01/01/2024 12:23</span>
                        <strong>15.000.000 vnđ</strong>
                        <div className={cx('status')}>Trạng thái giao hàng</div>
                    </div>
                    <div className={cx('seeDetail')}>Xem chi tiết</div>
                </div>
            </div> */}

            <div className={cx('tableOrder')}>
                <table>
                    <tr>
                        <th style={{ width: '3%' }}>#</th>
                        <th style={{ width: '15%' }}>Mã đơn hàng</th>
                        <th style={{ width: '' }}>Sản phẩm</th>
                        <th style={{ width: '20%' }}>Ngày đặt hàng</th>
                        <th style={{ width: '20%' }}>Thành tiền</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>DH001</td>
                        <td>Smartphone XYZ</td>
                        <td>2024-04-01</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>DH002</td>
                        <td>Laptop ABC</td>
                        <td>2024-04-02</td>
                        <td>$1200</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>DH003</td>
                        <td>Tablet DEF</td>
                        <td>2024-04-03</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>DH004</td>
                        <td>Smartwatch GHI</td>
                        <td>2024-04-04</td>
                        <td>$250</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>DH005</td>
                        <td>Camera JKL</td>
                        <td>2024-04-05</td>
                        <td>$700</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>DH006</td>
                        <td>Headphones MNO</td>
                        <td>2024-04-06</td>
                        <td>$150</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default CartUser;
