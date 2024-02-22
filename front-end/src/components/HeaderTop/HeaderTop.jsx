import { faBars, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Form, ListGroup, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Theme from '../Theme';
import { Col, Row, Button } from 'react-bootstrap';
import { Fragment, useEffect, useRef, useState } from 'react';
import * as searchService from '../../services/search';
import useDebounce from '../../hooks/useDebounce';
import ListGroupProduct from '../ListGroupProduct/ListGroupProduct';

function HeaderTop() {
    const [showCart, setShowCart] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);
    const debounce = useDebounce(searchValue, 500);

    const toggleCart = () => {
        setShowCart(!showCart);
    };
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResults([]);
            return;
        }
        const fetchApi = async () => {
            const result = await searchService.search(debounce);
            setSearchResults(result);
        };
        fetchApi();
    }, [debounce]);
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setSearchResults([]);
        }
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        <>
            <Navbar expand="md" className="bg-body-tertiary py-3">
                <Container fluid className="justify-content-center">
                    <Row className="w-100">
                        <Col
                            xs={{ span: 8, order: 2 }}
                            md={{ span: 2, order: 1 }}
                            className="d-flex align-items-center justify-content-around"
                        >
                            <Link
                                to="/"
                                style={{ color: 'var(--bs-pink)', textDecoration: 'none', fontSize: '1.5rem' }}
                            >
                                S1MPLE
                            </Link>
                        </Col>
                        <Col xs={{ span: 2, order: 1 }} md={{ span: 7, order: 2 }}>
                            <Navbar.Toggle aria-controls="openSearch" onClick={toggleSearch}>
                                <FontAwesomeIcon style={{ fontSize: '1.8754rem' }} icon={faSearch} />
                            </Navbar.Toggle>
                            <Navbar.Offcanvas show={showSearch} onHide={toggleSearch} id="openSearch" placement="start">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="openSearch" style={{ color: 'var(--bs-blue)' }}>
                                        <FontAwesomeIcon
                                            style={{
                                                fontSize: '1.5rem',
                                                color: 'var(--bs-blue)',
                                                marginRight: '10px',
                                            }}
                                            icon={faSearch}
                                        />
                                        TÌM KIẾM SẢN PHẨM
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div
                                        className="justify-content-around align-items-center flex-grow-1 pe-3"
                                        style={{ position: 'relative' }}
                                    >
                                        <Form className="d-flex w-100">
                                            <Form.Control
                                                type="search"
                                                placeholder="Tên sản phẩm"
                                                className="me-2 border border-black"
                                                aria-label="Search"
                                                value={searchValue}
                                                onChange={handleChange}
                                                ref={searchRef}
                                            />
                                        </Form>
                                        <ListGroupProduct
                                            width={searchRef.current}
                                            result={searchResults}
                                            imageHeight="50px"
                                            imageWidth="50px"
                                            marginLeft="5px"
                                        />
                                    </div>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Col>
                        <Col xs={{ span: 2, order: 3 }} md={{ span: 3, order: 3 }}>
                            <Navbar.Toggle aria-controls="openMenu" onClick={toggleMenu}>
                                <FontAwesomeIcon style={{ fontSize: '1.8754rem' }} icon={faBars} />
                            </Navbar.Toggle>
                            <Navbar.Offcanvas show={showMenu} onHide={toggleMenu} id="openMenu" placement="end">
                            </Navbar.Offcanvas>
                            <Nav className="justify-content-between align-items-center flex-grow-1 pe-3">
                                <div
                                    className="d-none flex-grow-1 justify-content-evenly align-items-center d-md-flex"
                                >
                                    <Link className="text-dark ">
                                        <FontAwesomeIcon
                                            style={{ fontSize: '1.6rem', color: 'var(--bs-highlight-color)' }}
                                            icon={faUser}
                                        />
                                    </Link>
                                    <Button
                                        className="text-dark"
                                        style={{ backgroundColor: 'transparent', border: 'none' }}
                                        onClick={toggleCart}
                                        id="cart"
                                    >
                                        <FontAwesomeIcon
                                            style={{ fontSize: '1.6rem', color: 'var(--bs-highlight-color)' }}
                                            icon={faCartShopping}
                                        />
                                    </Button>
                                    <div className="d-md-none">
                                        <Theme></Theme>
                                    </div>
                                </div>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Offcanvas show={showCart} onHide={toggleCart} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <FontAwesomeIcon
                            style={{ fontSize: '1.5rem', color: 'var(--bs-highlight-color)', marginRight: '10px' }}
                            icon={faCartShopping}
                        />
                        Giỏ hàng của bạn
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroupProduct
                            width={searchRef.current}
                            result={searchResults}
                            imageHeight="60px"
                            imageWidth="60px"
                            marginLeft="5px"
                        />
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={showMenu} onHide={toggleMenu} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <FontAwesomeIcon
                            style={{ fontSize: '1.5rem', color: 'var(--bs-highlight-color)', marginRight: '10px' }}
                            icon={faBars}
                        />
                        Giỏ hàng của bạn
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroupProduct
                            width={searchRef.current}
                            result={searchResults}
                            imageHeight="60px"
                            imageWidth="60px"
                            marginLeft="5px"
                        />
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
            <Navbar.Offcanvas show={showMenu} onHide={toggleMenu} id="openMenu" placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="openMenu" style={{ color: 'var(--bs-blue)' }}>
                        MENU
                        </Offcanvas.Title>               
                </Offcanvas.Header>
                <div className="d-flex justify-content-evenly align-items-center">
                <Link to="/profile" style={{ color: 'var(--bs-yellow)', textDecoration: 'none' }}>
                    <Button
                        variant="success"
                        style={{ width: '110px' }}
                        onClick={toggleMenu}
                    >
                        Đăng Nhập
                    </Button></Link>
                    <Link to="/" style={{ color: 'var(--bs-yellow)', textDecoration: 'none' }}>
                    <Button
                        variant="outline-success"
                        style={{ width: '110px' }}
                        onClick={toggleMenu}
                    >
                        Đăng Ký
                    </Button></Link>
                </div>
                <Offcanvas.Header className="pb-0 mt-3" style={{ color: 'var(--bs-blue)' }}>
                    DANH MỤC
                </Offcanvas.Header>
                <Offcanvas.Body className="w-100">
                    <>
                        <ListGroup>
                            <Link to="/profile" className="text-decoration-none" onClick={toggleMenu}>
                                <ListGroup.Item
                                    style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 1,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        wordBreak: 'break-word',
                                        paddingBottom: '6px',
                                    }}
                                >
                                    iphone
                                </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    </>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>
    );
}

export default HeaderTop;
