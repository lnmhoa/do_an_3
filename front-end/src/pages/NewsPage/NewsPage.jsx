import { useEffect } from "react";

function ListProductPage() {
    let defaultTitle = "Danh sách sản phẩm"
    useEffect(() => {
        document.title = defaultTitle;
      }, [defaultTitle]);
    
    return (
        <>
        List phone
        </>
    );
}

export default ListProductPage;