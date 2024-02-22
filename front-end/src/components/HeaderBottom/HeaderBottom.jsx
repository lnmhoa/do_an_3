import React, { useState, useEffect } from 'react';
import { Container, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarDarkExample() {
  const [showMore, setShowMore] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState([
    'Phone',
    'Laptop',
    'Tablet',
    'Tablet',
    'Tablet',
    'Tablet',
    'Tablet',
    'Tablet',
    'Tablet',
    'Tablet',
    'Tablet',
    'Tablet3',
    'Tablet5',
  ]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (items.length > 6) {
      setVisibleItems(items.slice(0, 6));
      setShowMore(true);
    } else {
      setVisibleItems(items);
      setShowMore(false);
    }
  }, [items]);

  return (
    <Navbar variant="dark" style={{ backgroundColor: 'var(--bs-blue)' }} expand="lg" className="px-5 d-none d-md-block">
      <Container fluid className='px-5'>
        {visibleItems.map((item, index) => (
          <div key={index} style={{ color: 'white' }}>
            <Link to='/detail-product' style={{ color: 'white', textDecoration: 'none' }}>{item}</Link>
          </div>
        ))}
        {showMore && (
          <Dropdown align="down-centered">
            <Dropdown.Toggle variant="none" id="dropdown-more" className="text-white">
              More
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {items.slice(6).map((item, index) => (
                <Dropdown.Item key={index} style={{ color: 'white' }}>
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;