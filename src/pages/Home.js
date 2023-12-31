import React, {useEffect, useState} from 'react';
import { Container, Row,Col } from 'react-bootstrap';


const Home = () => {
    const[loopNum, setLoopNum] = useState(0);
    const[isDeleting,setIsDeleting] = useState(false);
    const toRotate = [ 'Profesionales trabajando para vos... '];
    const[text, setText] = useState('');
    const[delta, setDelta] = useState(300- Math.random() * 100);
    const period = 2000;

useEffect(() =>{
    let ticker = setInterval(()=>{
        tick();
    },delta)
    return () => {clearInterval(ticker)};
})

const tick = () =>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

    setText(updatedText);
    if(isDeleting){
        setDelta(prevDelta => prevDelta /2)
    }
    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum +1);
        setDelta(500);
    }
}

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
        
    return(
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline special-line'>Bienvenido a tu nuevo cuidado Personal</span>
                    <h1>{`Centro medico especializado en el cuidado de tu Salud.  `}
                    <span className='wrap'>{text}</span>
                    </h1>
                </Col>
                <Col xs={12} md={6} xl={5}>
                 {/*    <img src='' alt='hedder Img'/> */}
                </Col>
            </Row>
        </Container>
    </section>
    );

};
export default Home;