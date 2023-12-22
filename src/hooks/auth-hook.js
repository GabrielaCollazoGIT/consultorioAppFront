import { useState,useCallback,useEffect } from "react";
let logoutTimer;
export const useAuth = () =>{
    const [token, setToken] = useState(false);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();
    const [userId, setUserId] = useState(false);
    
    
        const login = useCallback((id, token, expirationDate) => { // espero el userId y el token 
        setToken(token);
        setUserId(id);
                                    // si tengo una fecha de expiracion  en guardada en el localStorage o si no tengo creo una
        const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60); // genera un objeto Date que esta basado en current date mas 1 hs
        setTokenExpirationDate(tokenExpirationDate);
        localStorage.setItem('userData', JSON.stringify({userId: id, token:token, expiration: tokenExpirationDate.toISOString}));// se guarda el token en el localStorage, convierte Objects en strings
                                                                        // guara el dato fecha  de esta manera para poder desencriptarlo y no perder datos cuando sea Stringify
        }, []); 
    
        const logout = useCallback(() => {
        setToken(null);
        setTokenExpirationDate(null); // cuando me deslogueo lo limpio tambien
        setUserId(null);
        localStorage.removeItem('userData'); // elimino lo que guarde en el localStorage
        }, []);
    
    // uso esta funcion efect cuando el timer de nuestro token cambie
    useEffect(()=>{
    if(token && tokenExpirationDate){
        const remainingTime = tokenExpirationDate.getTime()  - new Date().getTime(); // tenemos el tiempo que resta en milisegundos
    logoutTimer = setTimeout(logout,remainingTime ) // se desloguea le pasamos el tiempo que queda,  nos devuelve un id del timer crado
    }else{ // si no hay token porque nos deslogueamos manualmente
    clearTimeout(logoutTimer);  // limpiamos el timeOut, cuando el token cambie, cuando nos delogeamos limpiamos cuando no logueamos seteamos un nuevo timer
    }
    },[token, logout, tokenExpirationDate]); // depende del token, por eso va en corchetes
    
  // esta funcion va a chequear el LocalStorage para el token
  useEffect(()=>{ // se va a ejecutar una vez(por eso el array vacio) cuando arranca la app por primera vez, useEffect se ejecuta luego de renderizar la app
    const storeData = JSON.parse(localStorage.getItem('userData')); // convierte String en JavaScript Objects (va a ser userId y el token)
    if(storeData && storeData.token && new Date (storeData.expiration) > new Date()){ // si la primer fecha es mayor a la otra el token es valido, 
       login(storeData.userId, storeData.token, new Date(storeData.expiration)); // es lo que necistamos para el login, lo pasamos por parametro
    };
    },[login]);

    return { token, login, logout, userId};
};