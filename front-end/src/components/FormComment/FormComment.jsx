import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormComment.module.scss';
import FormInput from '../FormInput/FormInput';

const cx = classNames.bind(styles);
function FormComment(props) {
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
            name: 'fullName',
            type: 'text',
            placeholder: 'Nhập họ tên *',
            required: true,
        },
        {
            id: 2,
            name: 'phoneNumber',
            type: 'text',
            placeholder: 'Nhập số điện thoại',
            pattern: '[0-9]*',
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: 'Nhập email',
            pattern:
                '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i;',
        },
    ];
    return (
        <div className={cx('comment-container')}>
            <form onSubmit={handleSubmit} action="">
                <div className={cx('box-form-1')}>
                    {inputs.map((input) => {
                        return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />;
                    })}
                </div>
                <textarea
                    placeholder="Nhận xét của bạn..."
                    className={cx('text-area')}
                    name="content"
                    id=""
                    cols="20"
                    rows="4"
                    required
                ></textarea>
                <div className={cx('sub-box-form-1')}>
                    <span>Để gửi bình lận bạn cần nhập tối thiểu trường họ tên và nội dung</span>
                    <button type="submit">&#10148; &nbsp;Gửi bình luận</button>
                </div>
            </form>
        </div>
    );
}

export default FormComment;
