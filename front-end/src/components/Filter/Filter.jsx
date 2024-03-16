import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

const filterItem = ['filter1', 'filter2', 'filter3', 'filter4', 'filter5', 'filter6', 'filter7', 'filter8', 'filter9'];
const subFilterItem = [
    'sub-filter1',
    'sub-filter2',
    'sub-filter3',
    'sub-filter4',
    'sub-filter5',
    'sub-filter6',
    'sub-filter7',
    'sub-filter8',
    'sub-filter9',
];

function HoverDiv({ mainContent, attachedContent }) {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };

    return (
        <>
            <div
                style={{ height: '130%', display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center', cursor: 'pointer' }}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                <div className={cx('item', {'hovered': hovered})}>{mainContent}</div>
                {hovered && (
                    <div className={cx('sub-container')}>
                        <div>{attachedContent}</div>
                        <div>{attachedContent}</div>
                        <div>{attachedContent}</div>
                        <div>{attachedContent}</div>
                        <div>{attachedContent}</div>
                        <div>{attachedContent}</div>
                        <div>{attachedContent}</div>
                        <div>{attachedContent}</div>
                    </div>
                )}
            </div>
        </>
    );
}

function Filter() {
    return (
        <div className={cx('container')}>
            {filterItem.map((item, index) => (
                <HoverDiv key={index} mainContent={item} attachedContent={item} />
            ))}
        </div>
    );
}

export default Filter;
