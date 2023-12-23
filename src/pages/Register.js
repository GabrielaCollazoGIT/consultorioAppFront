import React, { useState } from "react";
import '../pages/style.css';
import {Link} from "react-router-dom";


const Register = () => {
    const [name, setName] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');





const onfinishHandler = async (e) =>{
    e.preventDefault();
    console.log(e);
    try {
        const response = await fetch("http://localhost:5000/api/users/signup",{  // este fetch apunta al backend para login, mediante la ruta url
        method:'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({  // me convierte estos datos a Json
            userName: name, // extraemos esa info del input del form
            dni:dni,
            email:email,
            password:password        // mando estos atributos porq son los que espera recibir el Backend...
        }), // si esta tdo bien lo valida el botton submit
        })
        if(!response.ok){// statuscode
        throw new Error(); // eo c0digo que sigue no se ejecuta  y se dispara el catch
        }
    
        
        } catch (error) {
        console.log(error);
        }
}






    return(
        <>
    <div className="body-background">  
        <div className= "register template d-flex justify-content-center align-items-center vh-100">
            <div className="form-container p-5 rounded">
                <form onSubmit={onfinishHandler}>
                
                    <h3>Registro Usuario</h3>
                
                    <div className="mb-3">
                        <label htmlFor="name">Nombre </label>
                        <input type="text" placeholder="Enter Name"
                        className="form-control" required  autoComplete="off" 
                        onChange={(e)=> {setName(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dni">Dni </label>
                        <input type="text" placeholder="Enter Dni" 
                        className="form-control"required autoComplete="off"
                        onChange={(e)=> {setDni(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email"
                        className="form-control" required  autoComplete="off"
                        onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" placeholder="Enter Password" 
                        className="form-control" required  autoComplete="off"
                        onChange={(e)=> {setPassword(e.target.value)}}/>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-info">Registrarse</button>
                    </div>
                    <p className="text-rigth">
                        Return to <Link to="/login"
                        >Login</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
    </>
    );
};

export default Register;