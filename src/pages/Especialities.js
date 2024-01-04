import {Container,Row,Col,Card,Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
const Especialities = () => {
const [especialities, setEspecialities] = useState([]);

    useEffect(() => {
    
        const fetchEspecialidades = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/speciality",{  // este fetch apunta al backend para login, mediante la ruta url
                method:'GET',
                headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                },
                })   
                const data = await response.json();
                setEspecialities(data); 
                console.log(data);
            } catch (error) {
                console.error("Error al cargar Especialidades:", error);
            }
        };

        
        fetchEspecialidades();
    }, []); // La de


    console.log(especialities);
    return (
        <section id='prof' className='block prof-block'>
        <Container fluid >
            <div className='title-holder'>
                <h2>Nuestras Especialidades</h2>
            </div>
            <Row >
                {especialities?.map((especiality, index) => (
                <Col key={especiality.id} lg={3} md={3} sm={6} xs={12}>

                    <div className='holder'>
                    <Card className='d-flex justify-content-center align-items-center'>
                        <Card.Img variant='top' src='https://img.freepik.com/foto-gratis/cerebro-3d_1048-9244.jpg?w=996&t=st=1704396677~exp=1704397277~hmac=4e790e542f9a1f65ceee912186bde8a51f1a6aa2fcf6207f8f4534dbebb22d77' />
                        <Card.Body>
                        <Card.Title>{especiality.name}</Card.Title>
                        <Card.Text>{especiality.description}</Card.Text>
                        <Button variant='info'>Doctores disponibles</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    {index === 3 && <div className='d-lg-none d-md-none d-sm-none' style={{ height: '30px' }}></div>}
                    {/* Agrega un espacio vertical entre la cuarta y quinta tarjeta en pantallas pequeñas */}
                </Col>
                ))}
            </Row>
            </Container>
        </section>
        );
    };


export default Especialities;