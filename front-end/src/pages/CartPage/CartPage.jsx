import FormInput from '../../components/FormInput/FormInput';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import styles from './CartPage.module.scss';

const cx = classNames.bind(styles);

const inputs = [
    {
        id: 1,
        name: 'name',
        placeholder: 'Nhập họ vă tên',
        type: 'text',
        errorMessage: 'Vui lòng nhập họ và tên!',
        label: 'Họ và tên *',
        required: true,
    },
    {
        id: 2,
        name: 'tel',
        type: 'text',
        placeholder: 'Nhập số điện thoại',
        errorMessage: 'Vui lòng nhập số diện thoại hợp lệ!',
        label: 'Số điện thoại *',
        pattern: '[0-9]*',
        required: true,
    },
    {
        id: 3,
        name: 'Address',
        type: 'text',
        placeholder: 'Nhập địa chỉ',
        errorMessage: 'Vui lòng nhập địa chỉ!',
        label: 'Địa chỉ *',
        required: true,
    },
];

function CartPage({ title }) {
    const [values, setValues] = useState({
        tel: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        if (e.target.name === 'tel') {
            e.target.value = e.target.value.replace(/\D/g, '');
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>
            <div className={cx('container')}>
                <Link to="/">
                    <div className={cx('back')}>
                        <IoIosArrowBack fontSize={40} />
                        Quay lại
                    </div>
                </Link>
                <div className={cx('content')}>
                    <div className={cx('box-product')}>
                        <h3>Danh sách sản phẩm</h3>
                      {/* box sp dể ở đây */}
                    </div>
                    <div className={cx('box-info')}>
                        <h3>Thông tin nhận hàng</h3>
                        <i>Bạn cần nhập đầy đủ thông ti có dấu *</i>
                        <div className={cx('info-form')}>
                            <form onSubmit={handleSubmit} action="/cart">
                                {inputs.map((input) => {
                                    return (
                                        <FormInput
                                            key={input.id}
                                            {...input}
                                            value={values[input.name]}
                                            onChange={onChange}
                                        />
                                    );
                                })}
                                <div>
                                    <label htmlFor="note">Ghi chú</label>{' '}
                                    <textarea
                                        name="note"
                                        id=""
                                        cols="30"
                                        rows="10"
                                        placeholder="Nhập ghi chú"
                                    ></textarea>
                                </div>
                                <button type="submit">Xác nhận đặt hàng</button>
                            </form>
                        </div>
                       
                    </div> <div className={cx('info-product')}>
                            <div>Tổng giá trị: </div>
                            <div style={{marginTop: '10px'}}>Tổng thanh toán: <span style={{color: 'red'}}>26.000.000</span></div>
                        </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;
