import styles from './InfoUser.module.scss';
import classNames from 'classnames/bind';
import Hello from '../Hello/Hello';
import FormInput from '../FormInput/FormInput';
import { FaInfoCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const cx = classNames.bind(styles);

function InfoUser({ data }) {
    const user = useSelector((state) => state.user);
    const [sex, setSex] = useState(user.gender);
    const [requirePass, setrequirePass] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleSexChange = (option) => {
        setSex(option);
    };

    const handleFocusChangePass = (e) => {
        setrequirePass(e.target.value !== '');
    };

    return (
        <div className={cx('container')}>
            <Hello
                src={require('../../image/System/info.png')}
                valueText={'Toàn bộ thông tin cần thiết của bạn tại đây'}
            />
            <div className={cx('info-user')}>
                <form onSubmit={handleSubmit} action="">
                    <div className={cx('title')}>
                        <div className={cx('title-icon')}>
                            <FaInfoCircle />
                        </div>
                        <p className={cx('title-text')}>Thông tin cá nhân của bạn</p>
                    </div>
                    <div className={cx('content')}>
                        {data.map((field, index) => (
                            <div key={index} className={cx('info-field')}>
                                <strong>{field.label}</strong>
                                {field.name === 'gender' ? (
                                    <div style={{ display: 'flex' }}>
                                        {field.options.map((option) => (
                                            <div
                                                style={{ flex: 1 }}
                                                key={option}
                                                onClick={() => handleSexChange(option)}
                                            >
                                                <input
                                                    defaultValue={1}
                                                    type="radio"
                                                    onChange={() => handleSexChange(option)}
                                                    checked={sex === option}
                                                />
                                                <span
                                                    style={{
                                                        marginLeft: '5px',
                                                        fontSize: 13,
                                                        fontWeight: 'normal',
                                                        color: 'black',
                                                    }}
                                                >
                                                    {option}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <FormInput
                                        name={field.name}
                                        defaultValue={field.defaultValue}
                                        placeholder={field.placeholder}
                                        pattern={field.pattern}
                                        type={field.type}
                                    />
                                )}
                            </div>
                        ))}
                        <p>Để trống nếu không muốn thay đổi mật khẩu</p>
                        <div className={cx('info-field')}>
                            <strong>Mật khẩu cũ:</strong>
                            <FormInput
                                onChange={handleFocusChangePass}
                                name="password"
                                type={'password'}
                                placeholder="Nhập mật khẩu cũ của bạn..."
                            />
                        </div>
                        <div className={cx('info-field')}>
                            <strong>Mật khẩu mới:</strong>
                            <FormInput
                                errorMessage="Mật khẩu từ 8-20 kí tự. Ít nhất 1 từ, 1 số, 1 kí tự đặc biệt!"
                                pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
                                name="newPassword"
                                type="password"
                                placeholder="Nhập mật khẩu mới của bạn..."
                                required={requirePass}
                            />
                        </div>
                        <div className={cx('info-field')}>
                            <strong>Mật lại khẩu mới:</strong>
                            <FormInput
                                errorMessage="Mật khẩu từ 8-20 kí tự. Ít nhất 1 từ, 1 số, 1 kí tự đặc biệt!"
                                pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
                                name="confirmNewPassword"
                                type="password"
                                placeholder="Nhập lại mật khẩu mới của bạn..."
                                required={requirePass}
                            />
                        </div>
                        <button type="submit" className={cx('box-button')}>
                            Xác nhận
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InfoUser;
