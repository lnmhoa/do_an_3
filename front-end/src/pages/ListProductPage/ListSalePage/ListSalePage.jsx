import { useEffect } from "react";

function ListSalePage({title}) {
    useEffect(() => {
        document.title = title;
      }, [title]);
    
    return (
        <>
        List phone
        </>
    );
}

export default ListSalePage;