import { Image, ListGroup, ListGroupItem } from "react-bootstrap";

function ListGroupProduct({ width, result = [], imageHeight, imageWidth, marginLeft }) {
    return ( <ListGroup
        style={{
            position: 'absolute',
            left: 0,
            zIndex: 1,
            width: width ? width.offsetWidth : 'auto',
        }}
    >
        {result.map((result) => (
            <ListGroupItem key={result.id} className="d-flex rounded">
                <Image
                    src={result.avatar}
                    style={{ width: `${imageWidth}`, height: `${imageHeight}` }}
                    fluid
                    alt={result.avatar}
                />
                <div style={{ marginLeft: {marginLeft} }}>
                    <div
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            wordBreak: 'break-word',
                        }}
                    >
                        {result.nickname}
                    </div>
                    <div style={{ color: 'var(--bs-red)' }}>100.00.000đ</div>
                </div>
            </ListGroupItem>
        ))}
    </ListGroup> );
}

export default ListGroupProduct;