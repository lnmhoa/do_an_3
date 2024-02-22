import { useState, useEffect } from "react";

function useDebounce( value, delay ) {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(()=>{
        let handle = null
        clearTimeout(handle);
        handle = setTimeout(()=>{
            setDebounceValue(value)
        }, delay)
        return () => clearTimeout(handle)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    return debounceValue;
}

export default useDebounce;