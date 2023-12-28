import {Container,Row,Col,Card,Button } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
const Profesionals = () => {
    
    const {doctor, loading} = useFetch("http://localhost:5000/api/doctors");
    console.log(doctor);
    return(

        <section id='prof' className='block prof-block'>
            <Container fluid>
                
                <div className='title-holder'>
                    <h2>Nuestro Staff</h2>
                    <div className='subtitle'>profesionales en constante capacitación para tu salud</div>
                </div>
                <Row>
                    <Col sm={4}>
                    {loading && <p>Loading...</p>}
                {doctor?.map((d)=>(
                        <div className='holder'>
                            <Card style={{ width: '18rem', textAlign:"center" }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title> {d.name + d.lastname}</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="info">Turnos disponibles</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        ))}
                    </Col>
                </Row>
              
            </Container>
        </section>
)};

export default Profesionals;