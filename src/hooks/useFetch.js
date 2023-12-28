import {useState,useEffect } from "react";

export function useFetch (url){

    const [doctor, setDoctor] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error , setError] = useState(null);


    useEffect(()=>{
        setLoading(true);
        fetch(url,'GET',{ Authorization: "Bearer " + localStorage.getItem('token')})
        .then((response) => response.json())
        .then((response)=> setDoctor(response.doctors))
        .catch((error) => setError(error))
        .finally(()=> setLoading(false));
        
    },[url]);

    return{doctor, loading, error};
};