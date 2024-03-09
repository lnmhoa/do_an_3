import { useEffect } from "react";

function ListPhonePage({title}) {
    useEffect(() => {
        document.title = title;
      }, [title]);
    
    return (
        <>
        List phone
        </>
    );
}

export default ListPhonePage;