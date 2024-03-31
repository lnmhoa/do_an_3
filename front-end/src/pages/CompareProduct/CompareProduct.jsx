import classNames from 'classnames/bind';
import styles from './CompareProduct.module.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const mainProduct = {
    name: 'Samsung Galaxy S24 Ultra - 12GB/512GB - Chính hãng',
    price: '23.000.000 đ',
    priceSale: '22.000.000 đ',
    img: 'product.png',
};

const productCompare = {
    name: 'iPhone 15 Pro (128GB) - Chính hãng VN/A',
    price: '23.000.000 đ',
    priceSale: '22.000.000 đ',
    img: 'product.png',
};

function CompareProduct() {
    let defaultTitle = 'Trang chủ';
    useEffect(() => {
        document.title = defaultTitle;
    }, [defaultTitle]);
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('box-content')}>
                    <h4>Thông tin chung</h4>
                    <div className={cx('table-container')}>
                        <table>
                            <tr>
                                <th>Hình ảnh, giá</th>
                                <td>
                                    <div className={cx('item')}>
                                        <img src={require(`../../image/Upload/Product/${mainProduct.img}`)} alt="" />
                                        <Link to={`/detail-product/${mainProduct.name}`} className={cx('name')}>
                                            {mainProduct.name}
                                        </Link>
                                        <div className={cx('price')}>{mainProduct.price}</div>
                                        <div className={cx('more-info')}>
                                            <div className={cx('price-sale')}>{mainProduct.priceSale}</div>
                                            <div>Giá đã bao gồm 10% VAT</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <div className={cx('item')}>
                                        <img src={require(`../../image/Upload/Product/${productCompare.img}`)} alt="" />
                                        <Link to={`/detail-product/${productCompare.name}`} className={cx('name')}>
                                            {productCompare.name}
                                        </Link>
                                        <div className={cx('price')}>{productCompare.price}</div>
                                        <div className={cx('more-info')}>
                                            <div className={cx('price-sale')}>{productCompare.priceSale}</div>
                                            <div>Giá đã bao gồm 10% VAT</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>Bảo hành</th>
                                <td>Bảo hành 12 tháng chính hãng</td>
                                <td>Bảo hành 12 tháng chính hãng</td>
                            </tr>
                        </table>
                    </div>
                    <h4>MÀn hình</h4>
                    <div className={cx('table-container')}>
                        <table>
                            <tr>
                                <th>Hình ảnh, giá</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Bảo hành</th>
                                <td>Bảo hành 12 tháng chính hãng</td>
                                <td>Bảo hành 12 tháng chính hãng</td>
                            </tr>
                        </table>
                    </div>
                    <h4>Camera trước</h4>
                    <div className={cx('table-container')}>
                        <table>
                            <tr>
                                <th>Hình ảnh, giá</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Bảo hành</th>
                                <td>Bảo hành 12 tháng chính hãng</td>
                                <td>Bảo hành 12 tháng chính hãng</td>
                            </tr>
                        </table>
                    </div>
                    <h4>Camera sau</h4>
                    <div className={cx('table-container')}>
                        <table>
                            <tr>
                                <th>Hình ảnh, giá</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Bảo hành</th>
                                <td>Bảo hành 12 tháng chính hãng</td>
                                <td>Bảo hành 12 tháng chính hãng</td>
                            </tr>
                        </table>
                    </div>
                    <h4>Hệ điều hành & CPU</h4>
                    <div className={cx('table-container')}>
                        <table>
                            <tr>
                                <th>Hình ảnh, giá</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Bảo hành</th>
                                <td>Bảo hành 12 tháng chính hãng</td>
                                <td>Bảo hành 12 tháng chính hãng</td>
                            </tr>
                        </table>
                    </div>
                    <h4>Hệ điều hành & CPU</h4>
                    <div className={cx('table-container')}>
                        <table>
                            <tr>
                                <th>Hình ảnh, giá</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Bảo hành</th>
                                <td>Bảo hành 12 tháng chính hãng</td>
                                <td>Bảo hành 12 tháng chính hãng</td>
                            </tr>
                        </table>
                    </div>
                    <h4>Hệ điều hành & CPU</h4>
                    <div className={cx('table-container')}>
                        <table>
                            <tr>
                                <th>Hình ảnh, giá</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Bảo hành</th>
                                <td>Bảo hành 12 tháng chính hãng</td>
                                <td>Bảo hành 12 tháng chính hãng</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompareProduct;
