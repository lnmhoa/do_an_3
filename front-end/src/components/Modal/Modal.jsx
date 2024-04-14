import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { FaPen } from 'react-icons/fa';

const cx = classNames.bind(styles);

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(0);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const customStyles = {
        overlay: {
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 999,
        },
        content: {
            width: '600px',
            height: 'fit-content',
            margin: 'auto',
            padding: '20px',
            color: 'lightsteelblue',
        },
    };

    return (
        <>
            <button type="button" onClick={handleOpenModal}>
                <FaPen />
                Thêm đánh giá
            </button>
            <ReactModal isOpen={showModal} contentLabel="Modal" onRequestClose={handleCloseModal} style={customStyles}>
                <div className={cx('container')}>
                    <div className={cx('rating-form')}>
                        <h3>Đánh giá của bạn về sản phẩm</h3>
                        <div className={cx('star-rating')}>
                            {[1, 2, 3, 4, 5].map((value) => (
                                <React.Fragment key={value}>
                                    <input
                                        type="radio"
                                        id={`star${value}`}
                                        name="rating"
                                        value={value}
                                        onClick={() => handleRatingChange(value)}
                                    />
                                    <label htmlFor={`star${value}`}></label>
                                </React.Fragment>
                            ))}
                        </div>
                        <textarea name="review" placeholder="Viết đánh giá của bạn về sản phẩm này..."></textarea>
                        <button type="submit">Gửi đánh giá</button>
                    </div>
                </div>
            </ReactModal>
        </>
    );
};

export default Modal;
