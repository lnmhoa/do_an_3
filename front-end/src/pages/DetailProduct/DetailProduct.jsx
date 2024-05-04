import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FaShippingFast, FaHandPointRight, FaCartPlus, FaCaretRight, FaSearch } from 'react-icons/fa';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Product from '../../components/Product/Product';
import FormComment from '../../components/DetailComment/FormComment/FormComment';
import styles from './DetailProduct.module.scss';
import DetailComment from '../../components/DetailComment/DetailComment';
import Rating from '../../components/Rating/Rating';
const cx = classNames.bind(styles);

let ProductList = [
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'Samsung Galaxy S22', price: 25990000, rate: 120, sold: 450 },
    { name: 'Xiaomi Mi 11 Lite', price: 7990000, rate: 80, sold: 300 },
    { name: 'OPPO Reno7', price: 14990000, rate: 90, sold: 350 },
    { name: 'Vivo V23', price: 13990000, rate: 70, sold: 250 },
];

const infoItem = [
    {
        name: 'Điện thoại Samsung Galaxy S23 Ultra 12GB/512GB - Chính hãng',
        parameters: {
            'Độ phân giải': '3088 x 1440 (Edge Quad HD+), 200MP x 12MP x 10MP x 10MP, 12MP',
            'Kích thước màn hình': '6.8 inch',
            Rom: '8GB',
            'Bộ xử lý': 'Snapdragon® 8 Gen 2 Mobile Platform for Galaxy',
            'Dung lượng pin': '5000mAh',
            Ram: '12GB',
            'Mạng di động': 'Hỗ trợ 5G',
            'Mặt kính cảm ứng': 'Gorilla® Glass Victus® 2',
            'Chất liệu': 'Khung viền Armor Aluminum',
            'Kích thước': '163,4 x 78,1 x 8,9 mm',
            'Camera sau': '200MP x 12MP x 10MP x 10MP',
            'Camera trước': '12MP',
        },
        detail: '',
    },
];

const version = [
    { id: 1, value: '256GB', price: '25.000.000' },
    { id: 2, value: '512GB', price: '44.000.000' },
];

const color = [
    { id: 1, value: 'Màu Đen', price: '25.000.000' },
    { id: 2, value: 'Màu Đỏ', price: '23.000.000' },
    { id: 3, value: 'Màu Vàng', price: '24.000.000' },
];

function DetailProduct({ title }) {
    const [checkFit, setCheckFit] = useState(true); // Thiết lập trang thái xem thêm hoặc không
    const handleFit = () => {
        setCheckFit(false);
    };

    const [checkColor, setCheckColor] = useState(1);
    const [checkVersion, setVersion] = useState(1);

    useEffect(() => {
        document.title = title;
    }, [title]);

    const { parameters } = infoItem[0];

    return (
        <>
            <Breadcrumbs name={infoItem[0].name} />
            <div className={cx('container')}>
                {/* Tên sản phẩm */}
                <div className={cx('top')}>
                    <h1>{infoItem[0].name}</h1>
                </div>

                {/* Thông tin về sản phẩm bao gồm giá hình và thông số */}
                <div className={cx('info-product')}>
                    {/* Hình ảnh sản phẩm */}
                    <div className={cx('box-1')}>
                        <ProductSlider />
                    </div>

                    {/* Giá và option mua hàng */}
                    <div className={cx('box-2')}>
                        <div className={cx('price')}>
                            <span style={{ color: 'rgb(255, 71, 54)', fontSize: 20, fontWeight: 700 }}>
                                15.000.000 &#8363;
                            </span>
                            <span style={{ fontSize: 14, textDecoration: 'line-through', fontStyle: 'italic' }}>
                                20.000.000 &#8363;
                            </span>
                            <span> | </span>
                            <span style={{ fontSize: 11 }}>Giá đã bao gồm thuế VAT</span>
                        </div>

                        <div className={cx('free')}>
                            <FaShippingFast style={{ fontSize: 25 }} />
                            <span>Miễn phí vận chuyển toàn quốc</span>
                        </div>

                        <div className={cx('version-1')}>
                            <div>Lựa chọn phiên bản</div>
                            <div>
                                {version.map((option) => (
                                    <div
                                        className={cx('option', { active: option.id === checkVersion })}
                                        key={option.id}
                                        onClick={() => {
                                            setVersion(option.id);
                                        }}
                                    >
                                        <div>
                                            <input
                                                type="radio"
                                                onChange={() => {
                                                    setVersion(option.id);
                                                }}
                                                checked={checkVersion === option.id}
                                            />
                                            <span
                                                style={{
                                                    marginLeft: '5px',
                                                    fontSize: 13,
                                                    fontWeight: 'nomail',
                                                    color: 'black',
                                                }}
                                            >
                                                {option.value}
                                            </span>
                                        </div>
                                        <div style={{ color: 'rgb(255, 71, 54)', marginTop: '5px' }}>
                                            {option.price} &#8363;
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>Lựa chọn màu sắc</div>
                            <div>
                                {color.map((option, index) => (
                                    <div
                                        className={cx('option', { active: option.id === checkColor })}
                                        key={option.id}
                                        onClick={() => {
                                            setCheckColor(option.id);
                                        }}
                                    >
                                        <div>
                                            <input
                                                type="radio"
                                                checked={checkColor === option.id}
                                                onChange={() => {
                                                    setVersion(option.id);
                                                }}
                                            />
                                            <span
                                                style={{
                                                    marginLeft: '5px',
                                                    fontSize: 13,
                                                    fontWeight: 'nomail',
                                                    color: 'black',
                                                }}
                                            >
                                                {option.value}
                                            </span>
                                        </div>
                                        <div style={{ color: 'rgb(255, 71, 54)', marginTop: '5px' }}>
                                            {option.price} &#8363;
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={cx('promotion')}>
                            <div
                                style={{
                                    fontSize: 18,
                                    textTransform: 'uppercase',
                                    fontWeight: 800,
                                    color: 'var(--color-2)',
                                }}
                            >
                                Khuyến Mãi
                            </div>
                            <ul>
                                <li>
                                    <FaCaretRight style={{ marginLeft: 15, color: 'var(--color-2)' }} />
                                    Khuyến Mãi 1 nè
                                </li>
                                <li>
                                    <FaCaretRight style={{ marginLeft: 15, color: 'var(--color-2)' }} />
                                    Khuyến Mãi 1 nè
                                </li>
                                <li>
                                    <FaCaretRight style={{ marginLeft: 15, color: 'var(--color-2)' }} />
                                    Khuyến Mãi 1 nè
                                </li>
                            </ul>
                        </div>

                        <div className={cx('option-buy')}>
                            <div>
                                <FaHandPointRight style={{ color: '#fff', fontSize: 35 }} />
                                <span className={cx('text-button')}>Mua ngay</span>
                            </div>
                            {/* <div>Trả Góp <br /> Công ty tài chính</div> */}
                            <div>
                                <FaCartPlus style={{ color: '#fff', fontSize: 33 }} />
                                <span className={cx('text-button')}>Thêm vào giỏ</span>
                            </div>
                        </div>
                    </div>

                    {/* Thông số kỹ thuật của sản phẩm */}
                    <div>
                        <div className={cx('technical-specifications')}>THÔNG SỐ KỸ THUẬT</div>
                        <div className={cx('box-3')}>
                            <h3>
                                <center>{infoItem[0].name}</center>
                            </h3>
                            {
                                <div className={cx('thong-so-ky-thuat')}>
                                    {Object.entries(parameters).map(([key, value]) => (
                                        <div key={key}>
                                            <p>
                                                <strong>{key}:</strong> {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>

                {/* Thông tin chi tiết về sản phẩm */}
                <div className={cx('detail-info')} style={{ height: checkFit ? '300px' : 'fit-content' }}>
                    Galaxy S23 Ultra mang đến một thiết kế quen thuộc, nhìn thoáng qua, trông giống hệt với người tiền
                    nhiệm của nó: thiết kế Infinity-O Edge góc cạnh được làm cong về hai cạnh bên, mặt lưng hoàn thiện
                    từ chất liệu kính nhám mờ. Ngoài ra, thiết bị vẫn đi kèm bút S Pen quen thuộc và máy ảnh zoom quang
                    10X. Tuy nhiên phiên bản S23 Ultra vẫn có những điểm khác biệt như viền 2 bên được vát phẳng hơn,
                    kèm theo cụm camera chính sẽ to hơn một chút với vòng kim loại bao quanh camera nhìn rõ nét hơn. Màn
                    hình ít bo cong hơn 30%, đem lại trải nghiệm dùng bút S Pen tốt hơn. <br />
                    <br /> Ngoài ra, phiên bản S23 Ultra nói riêng và dòng Galaxy S23 nói chung có thiết kế đối xứng đậm
                    chất Ultra và thân thiện với môi trường hơn, qua việc 12 linh kiện làm từ nguyên vật liệu tái chế
                    bao gồm nhôm, thủy tinh tái chế tiền tiêu thụ và nhựa tổng hợp từ lưới đánh cá, thùng nước và chai
                    nhựa polyetylen terephthalate (PET) đã qua sử dụng. Thế hệ S23 cũng là thiết bị di động đầu tiên sử
                    dụng mặt kính Corning Gorilla Glass Victus 2 chống chịu tốt hơn khi rơi trên các bề mặt cứng và
                    thiết kế kết hợp linh kiện làm từ vật liệu tái chế tiền tiêu thụ lên tới 22%. Bao bì của thiết bị
                    cũng được làm 100% từ vật liệu tái chế. Galaxy S23 Ultra - Thiết kế hướng đến sự phát triển bền vững
                    Hệ thống camera siêu phân giải và bắt trọn mọi khoảnh khắc dù ngày hay đêm S23 Ultra có màn hình QHD
                    OLED 6,8 inch với độ phân giải 3088 x 1400 pixel và độ sáng tối đa 1.750 nits, tốc độ làm mới 120Hz
                    giống như trước đây, có thể giảm xuống 1Hz. <br />
                    <br />
                    Tuy nhiên màn hình mới đã được thiết kế sao cho phẳng hơn, vừa đảm bảo khả năng trình chiếu vô cực
                    lại khiến cho hai cạnh của máy được dày lên, giúp sử dụng S Pen dễ dàng hơn. Galaxy S23 Ultra còn hỗ
                    trợ chế độ chụp ảnh thiên văn sử dụng Hyperlapse. Hệ thống camera chính gồm 5 ống kính kèm cảm biến
                    lấy nét laser và đèn flash LED vẫn được đặt phía bên trái điện thoại. Công nghệ AI xác định chủ thể
                    (object-based AI) sẽ phân tích từng chi tiết trong khung hình, thậm chí từng đặc điểm nhỏ trên khuôn
                    mặt như tóc, mắt, để phản ánh chân thực đặc điểm của đối tượng trong ảnh... Camera chính có độ phân
                    giải tăng vọt lên 200MP cùng ống kính khẩu độ lớn F/1.7. Bộ ba camera còn lại phía sau vẫn không
                    thay đổi: một camera góc siêu rộng 12MP, cộng với một camera tele 3x và một camera tele 10x, cả hai
                    đều có độ phân giải 10MP. <br />
                    <br />
                    Camera selfie hiện cũng là 12MP sau khi giảm từ 40MP trong S22 Ultra. Ngoài ra, Galaxy S23 Ultra có
                    thể điều chỉnh độ sáng một cách tự động suốt cả ngày. Camera Mắt Thần Bóng Đêm (Night Ography
                    Camera) mới giảm flare sáng hiệu quả trên S23 giúp bắt được những điểm ảnh thu sáng và ổn định khung
                    hình video. Sâu hơn, Galaxy S23 Ultra giúp bắt được những khung hình và thước phim sắc nét nhờ việc
                    được xây dựng với điểm ảnh 2,4um – lớn nhất từ ​​trước đến nay của Samsung, cho phép các ống kính
                    máy ảnh thu được nhiều ánh sáng và dữ liệu hơn. Về mặt video, Galaxy S23 Ultra cung cấp khả năng ổn
                    định video được cải thiện trong video và khả năng quay video hiện lên tới 8K ở tốc độ 30 khung
                    hình/giây (tăng từ 24 khung hình/giây) với góc quay rộng hơn. Ngoài ra, đừng quên trải nghiệm Expert
                    RAW, ứng dụng chụp ảnh nâng cao đến từ Samsung dành cho các mẫu điện thoại Galaxy cao cấp để nâng
                    cao chất lượng ảnh đáng kể.
                    {/* Nếu checkFit đúng thì hiển thị toàn bộ không tin chi tiết về sản phẩm */}
                    {checkFit && (
                        <div className={cx('shadow')} onClick={handleFit}>
                            <div className={cx('show-more')}>Xem thêm &darr;</div>
                        </div>
                    )}
                </div>

                <div className={cx('compare')}>
                    <div className={cx('compare-1')}>
                        <p>So sánh sản phẩm tương tự</p>
                        <div className={cx('search')}>
                            <input
                                className={cx('search-input')}
                                placeholder="Bạn cần tìm sản phẩm nào..."
                                type="text"
                            />
                            <div className={cx('icon-search')}>
                                <FaSearch />
                            </div>
                        </div>
                    </div>

                    <div className={cx('compare-2')}>
                        <Product data={ProductList} countItem={5} compare={true} />
                    </div>
                </div>

                <div>
                    <Rating />
                </div>

                <div className={cx('comment')}>
                    <p> Bình luận về {infoItem[0].name}</p>
                    <FormComment />
                    <div>
                        <div>
                            <DetailComment />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailProduct;
