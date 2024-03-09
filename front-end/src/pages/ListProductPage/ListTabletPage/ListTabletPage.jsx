import { useEffect } from "react";

function ListTabletPage({title}) {
    useEffect(() => {
        document.title = title;
      }, [title]);
    
    return (
        <>
        List phone
        </>
    );
}

export default ListTabletPage;