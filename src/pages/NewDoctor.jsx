import React, {useState, useEffect} from "react";
import {Col, Row,Form, Button} from 'react-bootstrap';

import {useNavigate} from "react-router-dom";


const NewDoctor = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastname] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [desde, setDesde] = useState('');
    const [hasta, setHasta] = useState('');
    const [nacionality, setNacionality] = useState('');
    const [telephone, setTelephone] = useState('');
// funciona ver de refactorizar y ordenar el codigo para usar la autenticacion y autorizacion gral, usar las request de manera global tb
    const [specialitiesList, setSpecialitiesList] = useState([]); // Nuevo estado para la lista de especialidades

    const getUserData = async () =>{
        try {
            const response = await fetch("http://localhost:5000/api/users/info",{  // este fetch apunta al backend para login, mediante la ruta url
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
        



    useEffect(() => {
    
        const fetchSpecialities = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/speciality");
                const data = await response.json();
                setSpecialitiesList(data); 
                console.log(data);
            } catch (error) {
                console.error("Error al cargar las especialidades:", error);
            }
        };

        
        fetchSpecialities();
    }, []); // La de



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
            name: name, // extraemos esa info del input del form
            lastname:lastname,
            dni:dni,
            email:email,
            telephone:telephone,
            timing:[desde,hasta],
            nacionality:nacionality,
            speciality:speciality

                   // mando estos atributos porq son los que espera recibir el Backend...
        }), // si esta tdo bien lo valida el botton submit
        })
        const responseData = await response.json();
        if(!response.ok){// statuscode
            alert(responseData.error);
        throw new Error(); // eo c0digo que sigue no se ejecuta  y se dispara el catch
        }else{
            alert('Medico registrado Correctamente') // eo c0digo que sigue no se ejecuta  y se dispara el catch
            navigate('/');
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
            <h3 className="text-center"> Registro Medico</h3>
                    <Form onSubmit={onfinishHandler}>
        
                    <Row  className="mb-3">
                    <Form.Group as={Col} controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        placeholder=""
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="apellido">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control
                                        placeholder=""
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                                        type="email"
                                        placeholder=""
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                    </Form.Group>

                    <Form.Group as={Col} controlId="dni">
                    <Form.Label>Dni</Form.Label>
                    <Form.Control       
                                        placeholder="" 
                                        value={dni}
                                        onChange={(e) => setDni(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="telefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control  placeholder="" 
                                    value={telephone}
                                    onChange={(e) => setTelephone(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="nacionalidad">
                    <Form.Label>Nacionalidad</Form.Label>
                    <Form.Control  value={nacionality}
                                    onChange={(e) => setNacionality(e.target.value)} />
                    </Form.Group >

                    <Form.Group as={Col} controlId="especialidad">
                        <Form.Label>Especialidad</Form.Label>
                            <Form.Select
                                value={speciality}
                                onChange={(e) => setSpeciality(e.target.value)}
                            >
                                <option value="">Seleccione...</option>
                                {specialitiesList?.map((especialidad) => (
                                    <option key={especialidad.id} value={especialidad._id}>
                            
                                        {especialidad.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="horarios">
                        <Form.Label>Desde</Form.Label>
                        <Form.Control type="time" 
                                        value={desde}
                                        onChange={(e) => setDesde(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="horarios">
                        <Form.Label>Hasta</Form.Label>
                        <Form.Control type="time" 
                                        value={hasta}
                                        onChange={(e) => setHasta(e.target.value)}/>
                    </Form.Group>
                </Row>
                <div className="d-grid ">
                <Button className="btn btn-info" variant="info" type="submit">
                    Guardar
                </Button>
                </div>
                </Form>
            </div>
        </div>
    </div>
    </>
    );
};
export default NewDoctor;