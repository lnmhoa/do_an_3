import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormInput.module.scss';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const cx = classNames.bind(styles);

function FormInput(props) {
    const { label, id, onChange, ...otherValue } = props;
    const [showPassword, setShowPassword] = useState(false);

    console.log(showPassword);

    const onClick = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={cx('container')}>
            <span> </span>
            {otherValue.name === 'tel' ? (
                <input type={otherValue.type} {...otherValue} onChange={onChange} maxLength={11} />
            ) : (
                <input type={showPassword ? 'text' : 'password'} {...otherValue} onChange={onChange} />
            )}

            {otherValue.name === 'password' &&
                (showPassword ? (
                    <BsEye onClick={onClick} style={{ position: 'absolute', top: '9px', right: '30px' }} />
                ) : (
                    <BsEyeSlash onClick={onClick} style={{ position: 'absolute', top: '9px', right: '30px' }} />
                ))}
        </div>
    );
}

export default FormInput;
