import { useRef, useState, useEffect, useCallback } from 'react';
import styles from '../ProductAdmin/ProductAdmin.module.scss';
import className from 'classnames/bind';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import NavAdmin from '../../components/NavAdmin/NavAdmin';
import { getAllProduct } from '../../services/UserServices';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';

const cx = className.bind(styles);

function ProductAdmin(props) {
    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getAllProduct();
                setDataProduct(products.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []);
    const [editForm, setEditForm] = useState(false);
    const contentRef = useRef(null);

    const handleActionDelete = (index) => {
        Swal.fire({
            title: 'Xác nhận xoá!',
            text: 'Bạn sẽ xoá hoàn toàn dữ liệu này!',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: 'Huỷ',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Xoá ',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Đã xoá!',
                    text: 'Dữ liệu đã được xoá.',
                    icon: 'success',
                });
            }
        });
    };

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.filter = editForm ? 'blur(5px)' : 'none';
        }
    }, [editForm]);

    const handleActionEdit = useCallback(() => setEditForm(!editForm), [editForm]);

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 10;
    const currentItems = dataProduct.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(dataProduct.length / 10);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 10) % dataProduct.length;
        setItemOffset(newOffset);
    };

    return (
        <div className={cx('container')}>
            {editForm && <AddProductForm action={handleActionEdit} tittle="Thêm sản phẩm" />}
            <AdminSidebar />
            <div className={cx('sub-container', 'content')} ref={contentRef}>
                <div className={cx('table-title')}>Quản lý sản phẩm</div>
                <NavAdmin action={handleActionEdit} />
                <table className={cx('table-upload')}>
                    <thead>
                        <tr>
                            <th style={{ width: '4%' }}>#</th>
                            <th style={{ width: '11%' }}>Mã sản phẩm</th>
                            <th style={{ width: '35%' }}>Tên sản phẩm</th>
                            <th style={{ width: '10%' }}>Giá sản phẩm</th>
                            <th style={{ width: '10%' }}>Tồn kho</th>
                            <th style={{ width: '10%' }}>Phân loại</th>
                            <th style={{ width: '10%' }}>Thương hiệu</th>
                            <th style={{ width: '10%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((order, index) => (
                            
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{order._id}</td>
                                <td>
                                    <div className={cx('hehe')} key={index}>
                                        {order.productName}
                                    </div>
                                </td>
                                <td>{order.priceProduct}</td>
                                <td>{order.countInStock}</td>
                                <td>{order.type?.typeName}</td>
                                <td>{order.brand?.brandName}</td>
                                
                                <td>
                                    <div className={cx('action')} onClick={() => handleActionDelete(index)}>
                                        <FaTrash />
                                    </div>
                                    <div className={cx('action')}>
                                        <FaEdit />
                                    </div>
                                </td> 
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={cx('pagination')}>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<FaAngleRight />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel={<FaAngleLeft />}
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductAdmin;
