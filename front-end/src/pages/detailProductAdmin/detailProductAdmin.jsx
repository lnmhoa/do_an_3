import { useRef, useState, useEffect, useCallback } from 'react';
import styles from './detailProductAdmin.module.scss';
import className from 'classnames/bind';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import * as UserServices from '../../services/UserServices';

const cx = className.bind(styles);

function DetailProductAdmin(props) {
    const [dataBrand, setDataBrand] = useState([]);
    const [dataType, setDataType] = useState([]);
    const [detailProduct, setDetailProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [brand, type] = await Promise.all([UserServices.getAllBrand(), UserServices.getAllType()]);
                setDataBrand(brand.data);
                setDataType(type.data);
                console.log(type.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchDetailProduct = async () => {
            try {
                const url = window.location.href;
                const id = url.substring(url.lastIndexOf('/') + 1);

                if (id) {
                    const detail = await UserServices.getDetailProduct(id);
                    console.log(detail.data);
                    setDetailProduct(detail.data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchDetailProduct();
    }, []);

    return (
        <div className={cx('container')}>
            <AdminSidebar />
            <div className={cx('sub-container', 'content')}>
                <div className={cx('table-title')}>CHI TIẾT SẢN PHẨM</div>
                <div className={cx('detailProduct-form')}>
                    <img src={detailProduct.image} alt="" />
                    <div>
                        <div>
                            <fieldset>
                                <legend>Mã sản phẩm</legend>
                                <input type="text" value={detailProduct._id} />
                            </fieldset>
                            <fieldset>
                                <legend>Tên sản phẩm</legend>
                                <input type="text" value={detailProduct.productName} />
                            </fieldset>
                            <fieldset>
                                <legend>Giá bán</legend>
                                <input type="text" value={detailProduct.priceProduct} />
                            </fieldset>
                            <fieldset>
                                <legend>Số lượng</legend>
                                <input type="text" value={detailProduct.countInStock} />
                            </fieldset>
                        </div>

                        <div>
                            <fieldset>
                                <legend>Phân loại</legend>
                                <select name="" id="">
                                    {dataType.map((item) => (
                                        <option key={item._id} value={item._id}>
                                            {item.typeName}
                                        </option>
                                    ))}
                                </select>
                            </fieldset>
                            <fieldset>
                                <legend>Thương hiệu</legend>
                                <select name="" id="">
                                    {dataBrand.map((item) => (
                                        <option key={item._id} value={item._id}>
                                            {item.brandName}
                                        </option>
                                    ))}
                                </select>
                            </fieldset>
                            <fieldset>
                                <legend>Mô tả</legend>
                                <textarea style={{padding: '13px 20px'}} rows="5" cols="50" value={detailProduct.description} />
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProductAdmin;
