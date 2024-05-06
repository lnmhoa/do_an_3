import React from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import styles from './AdminSidebar.module.scss';
import { useState } from 'react';
import { GrUserAdmin } from "react-icons/gr";
import { FaUser, FaBox, FaRegArrowAltCircleLeft} from 'react-icons/fa';


const cx = className.bind(styles);

const menuItems = [
    { path: '/admin', text: 'Quản trị viên', icon: <GrUserAdmin /> },
    { path: '/admin/info-user', text: 'Quản lí sản phầm', icon: <GrUserAdmin /> },
    { path: '/admin/order', text: 'quản lí đơn hàng', icon: <FaBox /> },
    { path: '/admin/favorite-product', text: 'quản lí khách hàng', icon: <FaUser /> },
    { path: '/admin/evaluate', text: 'Thống kê & Báo cáo', icon: <GrUserAdmin /> },
    { path: '/', text: 'Trang chủ', icon: <GrUserAdmin /> },
];

function AdminSidebar(props) {

  const [active, setActive] = useState(window.location.pathname);

  const handleActive = (text) => {
      setActive(text);
  };


    return (
        <div className={cx('container')}>
            <Link to="/">
              Quản Trị Viên
            </Link>
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

export default AdminSidebar;
