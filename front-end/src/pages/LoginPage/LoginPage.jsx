import FormInput from '../../components/FormInput/FormInput';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';

const cx = classNames.bind(styles);

const LOGIN_OR_REGISTER = 1;

function LoginPage(props) {
    const [values, setValues] = useState({
        tel: '',
    });

    const [loginOrRegister, setForm] = useState(LOGIN_OR_REGISTER);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChangeForm = () => {
        setForm(!loginOrRegister);
    };

    const onChange = (e) => {
        if (e.target.name === 'tel') {
            e.target.value = e.target.value.replace(/\D/g, '');
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const inputLogin = [
        {
            id: 1,
            name: 'tel',
            placeholder: 'Nhập số điện thoại',
            label: 'Số điện thoại *',
            type: 'text',
            pattern: '[0-9]*',
            maxLength: '11',
            errorMessage: 'Vui lòng nhập số điện thoại hợp lệ!',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            placeholder: 'Nhập mật khẩu',
            type: 'password',
            errorMessage: 'Mật khẩu từ 8-20 kí tự. Ít nhất 1 từ, 1 số, 1 kí tự đặc biệt!',
            label: 'Mật khẩu *',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
    ];

    const inputRegister = [
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
        // {
        //     id: 5,
        //     name: 'dateOfBirth',
        //     type: 'date',
        //     placeholder: 'Birthday',
        //     label: 'Ngày sinh',
        // },
        // {
        //     id: 6,
        //     name: 'Address',
        //     type: 'text',
        //     placeholder: 'Nhập địa chỉ',
        //     label: 'Địa chỉ',
        // },
    ];

    return (
        <div className={cx('cont', { sSignup: loginOrRegister })}>
            <div className={cx('form', 'sign-in')}>
                <h2>Đăng nhập</h2>
                {inputLogin.map((item, index) => {
                    return (
                        <FormInput
                            name={item.name}
                            // placeholder={item.placeholder}
                            type={item.type}
                            errorMessage={item.errorMessage}
                            label={item.label}
                            pattern={item.pattern}
                        />
                    );
                })}
                <p className={cx('forgot-pass')}>Quên mật khẩu?</p>
                <button type="button" className={cx('submit')}>
                    đăng nhập
                </button>
            </div>

            <div className={cx('sub-cont')}>
                <div className={cx('img')}>
                    <div className={cx('img__text', 'm--up')}>
                        <div className={cx('loginIcon')}>
                            <img src={require('../../image/System/logo.png')} alt="" />
                            <h3> Bạn chưa có tài khoản?</h3>
                            <br />
                            <i>Hãy đăng kí</i>
                        </div>
                        {/* <div className={cx('loginIcon')}>
                            <img src={require('../../image/System/loginIcon.png')} alt="" />
                        </div> */}
                    </div>
                    <div className={cx('img__text', 'm--in')}>
                        <div className={cx('loginIcon')}>
                            <img src={require('../../image/System/logo.png')} alt="" />
                            <h3> Bạn đã có tài khoản?</h3>
                            <br />
                            <i>Hãy đăng nhập</i>
                        </div>
                        {/* <div className={cx('loginIcon')}>
                            <img src={require('../../image/System/loginIcon.png')} alt="" />
                        </div> */}
                    </div>

                    <div className={cx('img__btn')} onClick={handleChangeForm}>
                        <span className={cx('m--up')}>
                            <FaArrowLeftLong style={{ marginRight: 20 }} />
                            Đăng Kí
                        </span>
                        <span className={cx('m--in')}>
                            Đăng nhập
                            <FaArrowRightLong style={{ marginLeft: 20 }} />
                        </span>
                    </div>
                </div>
                <div className={cx('form', 'sign-up')}>
                    <h2>Tạo tài khoản</h2>
                    {inputRegister.map((item, index) => {
                        return (
                            <FormInput
                                name={item.name}
                                // placeholder={item.placeholder}
                                type={item.type}
                                errorMessage={item.errorMessage}
                                label={item.label}
                                pattern={item.pattern}
                            />
                        );
                    })}
                    <button type="button" className={cx('submit')}>
                        Đăng kí
                    </button>
                </div>
            </div>
        </div>
        // <script>
        //     document.querySelector('.img__btn').addEventListener('click', function() {
        //         document.querySelector('.cont').classNameList.toggle('s--signup');
        //     });
        // </script>
    );
}

export default LoginPage;
