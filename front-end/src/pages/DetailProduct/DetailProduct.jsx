import { useEffect } from "react";

function DetailProduct() {
    let defaultTitle = "Chi tiết sản phẩm"
    useEffect(() => {
        document.title = defaultTitle;
      }, []);
    
    return (
        <>
            <h1>DetailProduct</h1>
        </>
    );
}

export default DetailProduct;
