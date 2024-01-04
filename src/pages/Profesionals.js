import {Container,Row,Col,Card,Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
const Profesionals = () => {
const [doctors, setDoctors] = useState([]);
  
    useEffect(() => {
    
        const fetchDoctors = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/doctors",{  // este fetch apunta al backend para login, mediante la ruta url
                method:'GET',
                headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                },
                })   
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
        <Container fluid >
            <div className='title-holder'>
                <h2>Nuestro Staff</h2>
                <div className='subtitle'>Profesionales en constante capacitación para tu salud</div>
            </div>
            <Row >
                {doctors?.map((doctor, index) => (
                <Col key={doctor.id} lg={3} md={3} sm={6} xs={12}>

                    <div className='holder'>
                    <Card className='d-flex justify-content-center align-items-center'>
                        <Card.Img variant='top' src='https://img.freepik.com/free-photo/healthcare-workers-medicine-covid-19-pandemic-self-quarantine-concept-smiling-attractive-doctor-scrubs-glasses-stethoscope-neck-cross-arms-chest-ready-help-patients_1258-58772.jpg?w=1480&t=st=1704003162~exp=1704003762~hmac=647e2eabf0ad156395b8cfb2ecfac29a686bfc1aaed4ca001d194601e1fccf49' />
                        <Card.Body>
                        <Card.Title>{doctor.name + ' ' + doctor.lastname}</Card.Title>
                        <Card.Text>{doctor.specialities}</Card.Text>
                        <Button variant='info'>Turnos disponibles</Button>
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


export default Profesionals;