import React from 'react';
import styles from './AddProductForm.module.scss';
import className from 'classnames/bind';
import { FaEdit } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import SwalComp from '../../components/Swal/SwalComp';
import { useState, useEffect } from 'react';
import * as UserServices from '../../services/UserServices';
import { useNavigate } from 'react-router-dom';
import { UserMutationHooks } from '../../hooks/userMutationHooks';

const cx = className.bind(styles);
function AddProductForm({ action, tittle }) {
    const [values, setValues] = useState({});
    const [dataBrand, setDataBrand] = useState([]);
    const [dataType, setDataType] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [brand, type] = await Promise.all([UserServices.getAllBrand(), UserServices.getAllType()]);
                setDataBrand(brand.data);
                setDataType(type.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []);

    const mutation = UserMutationHooks((data) => UserServices.addProduct(data));

    const { data, isLoading, isSuccess, isError } = mutation;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({
            productName: values.productName,
            priceProduct: values.productPrice,
            countInStock: values.productCountInStock,
            description: values.productDescription,
            brand: values.brandProduct,
            type: values.typeProduct,
            image: values.imageProduct,
        });
    };

    useEffect(() => {
        if (isSuccess) {
            if (data.message === 'SUCCESS') {
                SwalComp('Thêm sản phẩm thành công', 'success', '/admin/product', navigate);
            } else {
                SwalComp(data.message, 'error', '/admin/product', navigate);
            }
        } else if (isError) {
            SwalComp('Vui lòng kiểm tra lại kết nối Internet', 'error', '/admin/product', navigate);
        }
    }, [isSuccess, isError]);

    const handleInputChange = (e) => {
        if (e.target.type === 'file') {
            setValues({ ...values, [e.target.name]: e.target.files[0].name });
        } else {
            setValues({ ...values, [e.target.name]: e.target.value });
        }
        console.log(values);
    };

    return (
        <form className={cx('container')} onSubmit={handleSubmit}>
            <div className={cx('title')}>
                <div>
                    <FaEdit /> <span>{tittle}</span>
                </div>
                <IoMdCloseCircle onClick={action} />
            </div>
            <div className={cx('content')}>
                <div className={cx('container-input-box')}>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Tên sản phẩm</label>
                        <input onChange={handleInputChange} type="text" name="productName" />
                    </div>
                </div>
                <div className={cx('container-input-box')}>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Giá bán ra</label>
                        <input onChange={handleInputChange} type="number" placeholder="VNĐ" name="productPrice" />
                    </div>

                    <div className={cx('input-box')}>
                        <label htmlFor="">Số lượng nhập kho</label>
                        <input onChange={handleInputChange} type="number" name="productCountInStock" />
                    </div>
                </div>
                <div className={cx('container-input-box')}>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Thương hiệu</label>
                        <select name="brandProduct" id="" onChange={handleInputChange}>
                            {dataBrand.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.brandName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Phân loại sản phẩm</label>
                        <select name="typeProduct" id="" onChange={handleInputChange}>
                            {dataType.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.typeName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('container-input-box')}>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Mô tả sản phẩm</label>
                        <textarea name="productDescription" id="" onChange={handleInputChange}></textarea>
                    </div>
                </div>{' '}
                <div className={cx('container-input-box')}>
                    <div className={cx('input-box')}>
                        <label htmlFor="">Hình ảnh sản phẩm</label>
                        <input
                            onChange={handleInputChange}
                            className={cx('custom-file-input')}
                            type="file"
                            name="imageProduct"
                        />
                    </div>
                </div>
                <button>Thêm Sản Phẩm</button>
            </div>
        </form>
    );
}

export default AddProductForm;
