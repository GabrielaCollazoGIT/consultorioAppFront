import React, {useState} from "react";
import '../pages/style.css';
import { Link, useNavigate} from "react-router-dom";

const LoginOp = ()=>{
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');





const onfinishHandler = async (e) =>{
    e.preventDefault();
    console.log(e);
    try {
        const response = await fetch("http://localhost:5000/api/users/login",{  // este fetch apunta al backend para login, mediante la ruta url
        method:'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({  // me convierte estos datos a Json
        
            email:email,
            password:password        // mando estos atributos porq son los que espera recibir el Backend...
        }), // si esta tdo bien lo valida el botton submit
        })
        const responseData = await response.json();
        if(response.ok){// statuscode

            localStorage.setItem("token", responseData.token)
        
        alert('login.....') // eo c0digo que sigue no se ejecuta  y se dispara el catch
        navigate('/');
        }
        
        } catch (error) {
        console.log(error);
        }
}



    return(
    <div className="body-background">
        <div className= "login template d-flex justify-content-center align-items-center vh-100">
            <div className="form-container p-5 rounded">
                <form onSubmit={onfinishHandler}>
                    <h3>Login</h3>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control"required
                        onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" placeholder="Enter Password" className="form-control"required 
                        onChange={(e)=> {setPassword(e.target.value)}}/>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-info">Iniciar Sesión</button>
                    </div>
                    <p className="text-rigth">
                        Forgot<Link to='/password-recovery' className="ms-2">Password</Link><Link to='/signup' className="ms-2">Registrarse</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default LoginOp;