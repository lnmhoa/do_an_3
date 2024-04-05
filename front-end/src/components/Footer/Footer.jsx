import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('top')}>
                <div>
                    <h2>Hỗ Trợ - Dịch Vụ</h2>
                    <ul>
                        <li>
                            <Link to="/">Chính sách và hướng dẫn mua hàng trả góp</Link>
                        </li>
                        <li>
                            <Link to="/">ướng dẫn mua hàng và chính sách vận chuyển</Link>
                        </li>
                        <li>
                            <Link to="/">Tra cứu đơn hàng</Link>
                        </li>
                        <li>
                            <Link to="/">Chính sách đổi trả và bảo hành</Link>
                        </li>
                        <li>
                            <Link to="/">Dịch vụ bảo hành mở rộng</Link>
                        </li>
                        <li>
                            <Link to="/">Chính sách giải quyết khiếu nại</Link>
                        </li>
                        <li>
                            <Link to="/">Quy chế hoạt động</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Thông tin liên hệ</h2>
                    <ul>
                        <li>
                            <Link to="/">Thông tin các trang TMĐT</Link>
                        </li>
                        <li>
                            <Link to="/">Dịch vụ sửa chữa CH2D-Care</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Thanh toán miễn phí </h2>
                    <img src={require('../../image/System/phuongthuctt.png')} alt="" />
                </div>
                <div>
                    <h2>Hình thức vận chuyển </h2>
                    <img src={require('../../image/System/chungchi.png')} alt="" />
                </div>
            </div>
            <div className={cx('bot')}>
                <div>
                    © 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI CH2D. MST: 2101364. (Đăng ký lần đầu: Ngày 01
                    tháng 04 năm 2024, Đăng ký thay đổi ngày 2/04/2024)
                </div>
                <div style={{ fontWeight: 'bold' }}>GP số 426/GP-TTĐT do sở TTTT Cần Thơ cấp ngày 31/03/2024</div>
                <div>Địa chỉ: 256 Nguyễn Văn Cừ, Quận Ninh Kiều, Thành phố Cần Thơ</div>
            </div>
        </div>
    );
}

export default Footer;
