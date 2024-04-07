import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Link } from 'react-router-dom';
import {
    FaRegUser,
    FaSlidersH,
    FaRegUserCircle,
    FaBox,
    FaRegHeart,
    FaRegCommentAlt,
    FaRegArrowAltCircleLeft,
} from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';

const cx = classNames.bind(styles);

const menuItems = [
    { path: '/profile', text: 'Bảng Điều Khiển', icon: <FaSlidersH /> },
    { path: '/profile/info-user', text: 'Thông tin tài khoản', icon: <FaRegUserCircle /> },
    { path: '/profile/order', text: 'Đơn hàng của bạn', icon: <FaBox /> },
    { path: '/profile/favorite-product', text: 'Sản phẩm yêu thích', icon: <FaRegHeart /> },
    { path: '/profile/evaluate', text: 'Quản lí đánh giá', icon: <FaRegCommentAlt /> },
];

function SideBar() {
    const [avatar, setAvatar] = useState(null);
    const [newAvatar, setNewAvatar] = useState(require('../../image/System/avatar.png'));
    const [active, setActive] = useState(window.location.pathname);

    const handleActive = (text) => {
        setActive(text);
    };

    const onDrop = (acceptedFiles) => {
        const imageURL = URL.createObjectURL(acceptedFiles[0]);
        const newAvatarPath = `require('../../image/System/${acceptedFiles[0].path} )`;
        setAvatar(imageURL);
        setNewAvatar(newAvatarPath);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className={cx('sub-container', 'menu')}>
            <Link to="/">
                <img
                    src={require('../../image/System/logo.png')}
                    alt="logo website"
                    style={{ display: 'block', width: 230, margin: '20px auto 40px' }}
                />
            </Link>
            <div className={cx('info-box')}>
                <img
                    src={avatar ? avatar : newAvatar}
                    alt="logo website"
                    style={{
                        display: 'block',
                        width: 70,
                        objectFit: 'cover',
                        aspectRatio: '1',
                        borderRadius: '50%',
                        backgroundColor: 'rgb(0, 153, 157)',
                    }}
                />
                <div className={cx('info-user')}>
                    <div>
                        <strong>Thịnh Vô Văn Hoá</strong>
                    </div>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <nav>
                            <FaRegUser /> Thay đổi ảnh đại diện
                        </nav>
                    </div>
                </div>
            </div>
            <nav>
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                handleActive(item.text);
                            }}
                        >
                            <Link to={item.path} className={cx({ active: item.path === active })}>
                                {item.icon} {item.text}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link>
                            <FaRegArrowAltCircleLeft className={cx('icon')} /> Đăng xuất
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;
