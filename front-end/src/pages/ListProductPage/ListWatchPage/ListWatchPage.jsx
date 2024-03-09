import { useEffect } from "react";

function ListWatchPage({title}) {
    useEffect(() => {
        document.title = title;
      }, [title]);
    
    return (
        <>
        List phone
        </>
    );
}

export default ListWatchPage;