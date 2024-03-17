import classNames from 'classnames/bind';
import styles from './ProfilePage.module.scss';
import { useEffect, useState } from 'react';
import ControllerUser from '../../components/ControllerUser/ControllerUser';
import InfoUser from '../../components/InfoUser/InfoUser';
import CartUser from '../../components/CartUser/CartUser';
import FavoriteProduct from '../../components/FavoriteProduct/FavoriteProduct';
import EvaluateUser from '../../components/EvaluateUser/EvaluateUser';
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
    { component: <ControllerUser />, text: 'Bảng Điều Khiển', icon: <FaSlidersH />, type: ControllerUser },
    { component: <InfoUser />, text: 'Thông tin tài khoản', icon: <FaRegUserCircle />, type: InfoUser },
    { component: <CartUser />, text: 'Đơn hàng của bạn', icon: <FaBox />, type: CartUser },
    { component: <FavoriteProduct />, text: 'Sản phẩm yêu thích', icon: <FaRegHeart />, type: FavoriteProduct },
    { component: <EvaluateUser />, text: 'Quản lí đánh giá', icon: <FaRegCommentAlt />, type: EvaluateUser },
];

function ProfilePage({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    const [avatar, setAvatar] = useState(null);
    const [Comp, setComp] = useState(<ControllerUser />);

    const onDrop = (acceptedFiles) => {
        const imageURL = URL.createObjectURL(acceptedFiles[0]);
        setAvatar(imageURL);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleClick = (comp) => {
        setComp(comp);
    };

    return (
        <div className={cx('container')}>
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
                        src={avatar ? avatar : require('../../image/System/avatar.png')}
                        alt="logo website"
                        style={{
                            display: 'block',
                            width: 60,
                            objectFit: 'cover',
                            aspectRatio: '1',
                            borderRadius: 15,
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
                            <li key={index} onClick={() => handleClick(item.component)}>
                                <Link className={cx({ active: Comp.type === item.type })}>
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
            <div className={cx('sub-container', 'content')}>
                <h2 style={{ textAlign: 'left', padding: 15 }}>Bảng Điều Khiển</h2>
                {Comp}
            </div>
        </div>
    );
}

export default ProfilePage;
