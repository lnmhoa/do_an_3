import React from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import styles from './AdminSidebar.module.scss';
import { useState, useEffect } from 'react';
import { GrUserAdmin } from 'react-icons/gr';
import { MdBrandingWatermark } from 'react-icons/md';
import { FaUser, FaBox, FaRegArrowAltCircleLeft, FaHome, FaChartLine, FaList } from 'react-icons/fa';
import { IoPhonePortrait  } from "react-icons/io5";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { isJsonString } from '../../utils/json';


const cx = className.bind(styles);

const menuItems = [
    { path: '/admin/', text: 'Admin', icon: <GrUserAdmin /> },
    { path: '/', text: 'Trang chủ', icon: <FaHome /> },
    { path: '/admin/product', text: 'Thương hiệu', icon: <MdBrandingWatermark /> },
    { path: '/admin/product', text: 'Danh mục', icon: <FaList /> },
    { path: '/admin/product', text: 'Sản phẩm', icon: <IoPhonePortrait  /> },
    { path: '/admin/info-user', text: 'khách hàng', icon: <FaUser /> },
    { path: '/admin/order', text: 'đơn hàng', icon: <FaBox /> },
    { path: '/admin/evaluate', text: 'Thống kê', icon: <FaChartLine /> },
];

function AdminSidebar(props) {
    const [active, setActive] = useState(window.location.pathname);
    const handleActive = (text) => {
        setActive(text);
    };

    // const navigate = useNavigate();
    // const [isAccessTokenHandled, setIsAccessTokenHandled] = useState(false);
    // useEffect(() => {
    //     const handleAccessToken = () => {
    //         let userStorage = localStorage.getItem('access_token');
    //         let userDecode = {};
    //         if (userStorage && isJsonString(userStorage)) {
    //             userStorage = JSON.parse(userStorage);
    //             userDecode = jwtDecode(userStorage);
    //         }
    //         if (userDecode.isAdmin === false || userStorage === null) { 
    //             navigate('/')
    //         };   
    //         setIsAccessTokenHandled(true);
    //     };
    //     handleAccessToken();
    // }, []);

    // if (!isAccessTokenHandled) {
    //     return (<div></div>);
    // }

    return (
        <div className={cx('container')}>
            <Link to="">Quản trị viên</Link>
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
                                {item.icon}
                                {item.text}
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

export default AdminSidebar;
