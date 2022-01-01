import { useEffect, useRef, useState } from "react";

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true); 
    const [state, setState] = useState( { data: null, loading: true, error: null } );

    useEffect( () => { //for when component is unmounted with the setState inside the fetch query doesn't throw the error: Can't perform a React state update on an unmounted component. This is emulated hitting too fast the Show/Hide button, that data is not still retrieved from the API, and when it does the component is gone (unmounted) and it tries to run setState(), which produces the error.
        return () => {
            isMounted.current = false;
        }
    }, [] );

    useEffect( () => { 
        setState( { data: null, loading: true, error: null } );
        
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                if (isMounted.current) {
                    setState( { 
                        loading: false,
                        error: null,
                        data 
                    })
                }
            })
            .catch( () => {
                setState( {
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                } );
            });

    } , [url]);

    return state; 
}
