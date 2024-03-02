import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <>
            <div className={cx('container')}>
                <ul>
                    <li>
                        <a
                            style={{ border: '2px solid #3c5a99' }}
                            rel="noreferrer"
                            href="https://www.facebook.com/"
                            target="_blank"
                        >
                            <FaFacebookF color="#3c5a99" />
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ border: '2px solid #f00' }}
                            rel="noreferrer"
                            href="https://www.youtube.com/"
                            target="_blank"
                        >
                            <FaYoutube color="#f00"/>
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ border: '2px solid #ad63a0' }}
                            rel="noreferrer"
                            href="https://www.instagram.com/"
                            target="_blank"
                        >
                            <FaInstagram color="#ad63a0"/>
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ border: '2px solid black' }}
                            rel="noreferrer"
                            href="https://www.tiktok.com/"
                            target="_blank"
                        >
                            <FaTiktok color="black"/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Contact;
