import styles from '../detailProductAdmin/detailProductAdmin.module.scss';
import className from 'classnames/bind';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';

const cx = className.bind(styles);

function detailProductAdmin(props) {
    return (
        <div className={cx('container')}>
            <AdminSidebar />
            <div className={cx('sub-container', 'content')}>
                <div className={cx('table-title')}>CHI TIẾT SẢN PHẨM</div>
                <div className={cx('detailProduct-form')}>
                    <img src={require('../../image/Upload/Product/product.jpg')} alt="" />
                    <div>
                        <label htmlFor="">Mã sản phẩm</label>
                        <input type="text" />
                        <label htmlFor="">Tên sản phẩm</label>
                        <input type="text" />
                        <label htmlFor="">Giá sản phẩm</label>
                        <input type="text" />
                        <label htmlFor="">Tồn kho</label>
                        <input type="text" />
                        <label htmlFor="">Phân loại</label>
                        <input type="text" />
                        <label htmlFor="">Thương hiệu</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default detailProductAdmin;
