import {Container,Row,Col,Card,Button } from 'react-bootstrap';
//import { useFetch } from '../hooks/useFetch';
const Profesionals = () => {
    
    //const {doctor, loading} = useFetch("http://localhost:5000/api/doctors");
    //console.log(doctor);
    return(

        <section id='prof' className='block prof-block'>
            <Container fluid>
                
                <div className='title-holder'>
                    <h2>Nuestro Staff</h2>
                    <div className='subtitle'>profesionales en constante capacitación para tu salud</div>
                </div>
                <Row>
                    <Col sm={4}>
                
                        <div className='holder'>
                            <Card style={{ width: '18rem', textAlign:"center" }}>
                                <Card.Img variant="top" src="https://img.freepik.com/foto-gratis/doctor-brazos-cruzados-sobre-fondo-blanco_1368-5790.jpg?size=626&ext=jpg&ga=GA1.1.2077174841.1703391294&semt=sph" />
                                <Card.Body>
                                    <Card.Title> {'Lopez Mario'}</Card.Title>
                                    <Card.Text>
                                    {'Especialista en Cardiologia'}
                                    </Card.Text>
                                    <Button variant="info">Turnos disponibles</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    </Col>
                </Row>
            
            </Container>
        </section>
)};

export default Profesionals;