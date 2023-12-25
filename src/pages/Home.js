import React, {useEffect} from 'react';

import Layout from '../components/Layout';



const Home = () => {

    const getUserData = async () =>{
        try {
            const response = await fetch("http://localhost:5000/api/users/getUserById",{  // este fetch apunta al backend para login, mediante la ruta url
            method:'GET',
            headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
            },
            })   
            response.json();
            console.log(response);
            } catch (error) {
            console.log(error);
            }

    }
    
        useEffect(() => {
            getUserData();
        },[]);

    return(
    <> 
        
        <Layout/>

        <h1>HOme</h1>
        </>
    );

};
export default Home;