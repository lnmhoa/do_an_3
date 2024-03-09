import { useEffect } from "react";

function ListLaptopPage({ title }) {
    useEffect(() => {
        document.title = title;
      }, [title]);
    
    return (
        <>
        List phone
        </>
    );
}

export default ListLaptopPage;