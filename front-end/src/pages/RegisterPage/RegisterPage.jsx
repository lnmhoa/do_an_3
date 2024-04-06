import FormInput from '../../components/FormInput/FormInput';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function LoginPage(props) {
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

    const inputs = [
        {
            id: 1,
            name: 'numberPhone',
            type: 'text',
            placeholder: 'Nhập số điện thoại',
            errorMessage: 'Vui lòng nhập số diện thoại hợp lệ!',
            label: 'Số điện thoại *',
            pattern: '[0-9]*',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Nhập email',
            errorMessage: 'Vui lòng nhập đúng email!',
            label: 'Email *',
            pattern:
                '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i;',
            required: true,
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Nhập password',
            errorMessage: 'Mật khẩu từ 8-20 kí tự. Ít nhất 1 từ, 1 số, 1 kí tự đặc biệt!',
            label: 'Mật khẩu *',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Nhập lại mật khẩu',
            errorMessage: 'Mật khẩu xác nhận không trùng khớp!',
            label: 'Xác nhận mật khẩu *',
            pattern: values.password,
            required: true,
        },
        {
            id: 5,
            name: 'dateOfBirth',
            type: 'date',
            placeholder: 'Birthday',
            label: 'Ngày sinh',
        },
        {
            id: 6,
            name: 'Address',
            type: 'text',
            placeholder: 'Nhập địa chỉ',
            label: 'Địa chỉ',
        },
    ];

    return (
        <div className={cx('container')}>
            <img
                src={require('../../image/System/imgAccount.png')}
                alt=""
                style={{ height: 360, aspectRatio: '1 / 1.1' }}
            />
            <div className={cx('sub-container')}>
                <div className={cx('title')}>Đăng Kí</div>
                <form onSubmit={handleSubmit} action="/login">
                    {inputs.map((input) => {
                        return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />;
                    })}
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Link to="/login">
                            <div className={cx('note')}>Bạn đã có tài khoản?</div>
                        </Link>
                    </div>
                    <button type="submit">Đăng Kí</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
