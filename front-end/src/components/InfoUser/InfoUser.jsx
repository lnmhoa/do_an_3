import styles from './InfoUser.module.scss';
import classNames from 'classnames/bind';
import Hello from '../Hello/Hello';
import FormInput from '../FormInput/FormInput';
import { useState } from 'react';

const cx = classNames.bind(styles);

function InfoUser({data}) {
    const [sex, setSex] = useState('Nam');
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
        <>
            <Hello
                src={require('../../image/System/info.png')}
                valueText={'Toàn bộ thông tin cần thiết của bạn tại đây'}
            />
            <div className={cx('info-user')}>
                <form onSubmit={handleSubmit} action="">
                    <h2>Thông tin của bạn</h2>
                    {data.map((field, index) => (
                        <div key={index} className={cx('info-field')}>
                            <strong>{field.label}</strong>
                            {field.name === 'gender' ? (
                                <div style={{ display: 'flex' }}>
                                    {field.options.map((option) => (
                                        <div style={{ flex: 1 }} key={option} onClick={() => handleSexChange(option)}>
                                            <input
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
                            placeholder="Điền mật khẩu cũ của bạn..."
                        />
                    </div>
                    <div className={cx('info-field')}>
                        <strong>Mật khẩu mới:</strong>
                        <FormInput
                            errorMessage="Mật khẩu từ 8-20 kí tự. Ít nhất 1 từ, 1 số, 1 kí tự đặc biệt!"
                            pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
                            name="newPassword"
                            type="password"
                            placeholder="Điền mật khẩu mới của bạn..."
                            required={requirePass}
                        />
                    </div>
                    <button type="submit" className={cx('box-button')}>
                        Xác nhận
                    </button>
                </form>
            </div>
        </>
    );
}

export default InfoUser;
