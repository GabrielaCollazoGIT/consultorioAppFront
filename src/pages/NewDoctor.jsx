import React from "react";
import '../pages/style.css';
import {Col, Row,Form, Button} from 'react-bootstrap';

//import {Link, useNavigate} from "react-router-dom";


const NewDoctor = () => {
 /*    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLatname] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [time, setTime] = useState('');
    const [password, setPassword] = useState('');
 */




const onfinishHandler = async (e) =>{
    e.preventDefault();
    console.log(e);
    try {
        const response = await fetch("http://localhost:5000/api/doctors/new",{  // este fetch apunta al backend para login, mediante la ruta url
        method:'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({  // me convierte estos datos a Json
           /*  name: name, // extraemos esa info del input del form
            lastname:lastname,
            dni:dni,
            email:email,
            password:password  */       // mando estos atributos porq son los que espera recibir el Backend...
        }), // si esta tdo bien lo valida el botton submit
        })
        const responseData = await response.json();
        if(!response.ok){// statuscode
            alert(responseData.error);
        throw new Error(); // eo c0digo que sigue no se ejecuta  y se dispara el catch
        }else{
            alert('Registrado Correctamente, por favor inicia sesion') // eo c0digo que sigue no se ejecuta  y se dispara el catch
            //navigate('/login');
        }
    
        
        } catch (error) {
        console.log(error);
        }
}



    return(
        <>
    <div className="body-background">  
        <div className= "register template d-flex justify-content-center align-items-center vh-100">
            <div className="form-container  rounded">
            <h1 className="text-center"> Registro Medico</h1>
                    <Form onSubmit={onfinishHandler}>
        
                    <Row  className="mb-3">
                    <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control placeholder="Ingrese Nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control placeholder="Ingrese Apellido" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="dni">
                    <Form.Label>Dni</Form.Label>
                    <Form.Control  placeholder="Ingrese Dni" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="telefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control  placeholder="Ingrese telefono" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="domicilio">
                    <Form.Label>Domicilio</Form.Label>
                    <Form.Control placeholder="Ingrese domicilio" />
                </Form.Group>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="nacionalidad">
                    <Form.Label>Nacionalidad</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="especialidad">
                    <Form.Label>Especialidad</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>seleccione</option>
                        <option>Neurologia</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        </div>
    </div>
    </>
    );
};
export default NewDoctor;