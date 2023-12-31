import {Container,Row,Col,Card,Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
const Profesionals = () => {
const [doctors, setDoctors] = useState([]);
  
    useEffect(() => {
    
        const fetchDoctors = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/doctors");
                const data = await response.json();
                setDoctors(data); 
                console.log(data);
            } catch (error) {
                console.error("Error al cargar Doctores:", error);
            }
        };

        
        fetchDoctors();
    }, []); // La de


    console.log(doctors);
    return (
        <section id='prof' className='block prof-block'>
            <Container fluid>
                <div className='title-holder'>
                <h2>Nuestro Staff</h2>
                <div className='subtitle'>Profesionales en constante capacitación para tu salud</div>
                </div>
                <Row>
                {doctors?.map((doctor) => (
                    <Col key={doctor.id} sm={4}>
                    <div className='holder'>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                        <Card.Img variant='top' src={doctor.image} />
                        <Card.Body>
                            <Card.Title>{doctor.name +' ' +doctor.lastname}</Card.Title>
                            <Card.Text>{doctor.specialities}</Card.Text>
                            <Button variant='info'>Turnos disponibles</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    </Col>
                ))}
                </Row>
            </Container>
            </section>
        );
    };


export default Profesionals;