import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  // creamos estos estados para  el manejo de errores y para mostrar que la pagina carga
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
                            // hace que no se reinicialice en caso de que la peticion sea pedida nuevamente
    const activeHttpRequest = useRef([]); /// esto lo uso en caso de cambiar de paginas rapidamente y que me devuelva un error

    // creo una funcion global para manejar los request!!!
    // usoCallback para eevitar inifinitos bucles(y se ejcuta solo cuando es llamado)
    const sendRequest =  useCallback(async (url, method = 'GET', body = null, headers={}) =>{
        
        setIsLoading(true); // manejp el estado del Loading
        const httpAbortCrtl = new AbortController();// ds una funcionalidad de los navegadores modernos
        // lo agrego al array creado fuera de la funcion
        activeHttpRequest.current.push(httpAbortCrtl);
    try {
        const response = await fetch(url,{
            method,
            body,
            headers,
            signal: httpAbortCrtl.signal //linkea el abortController a la request en la que se ejecuta
        });

        const responseData = await response.json(); // es el usuario creado q tenemos en la rta del backend 
        // elimna el controller en donde la peticion ya fue completada
        // se queda con todos los controles menos el que esta siendo usado en la actual request, con eso no tenemos controllers viejos
        activeHttpRequest.current = activeHttpRequest.current.filter(reqCrl => reqCrl !== httpAbortCrtl);

        if(!response.ok){// statuscode
          throw new Error(responseData.message); // eo c0digo que sigue no se ejecuta  y se dispara el catch
        
        }
        /// si la rta es .ok!
        return responseData;
    } catch (error) {
        setError(error.message);
        setIsLoading(false);
        throw error; // envio que algo salio mal
    }

    // ssegundo parametro array vacio de lo que seria los datos de la dependencia
    },[]);
    // seteo el error en null
    const clearError = () =>{
        setError(null);
    };

    // esto es para que nunca continue una request que esta lanzada, cuando cambiamos de componente
    // a otro que no lanzo la llamada http
    useEffect(()=>{
        return () =>{
            activeHttpRequest.current.forEach(abortCrl => abortCrl.abort());  // es una funcion limpia, por cada abrtCrl lo aborta..
        };
    },[]);

    return{isLoading, error,sendRequest, clearError}  
};

// ver modulo 10 - capitulo 10(casi al final)