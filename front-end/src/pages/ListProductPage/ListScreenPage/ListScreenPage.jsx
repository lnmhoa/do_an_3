import { useEffect } from "react";

function ListScreenPage({title}) {
    useEffect(() => {
        document.title = title;
      }, [title]);
    
    return (
        <>
        List phone
        </>
    );
}

export default ListScreenPage;