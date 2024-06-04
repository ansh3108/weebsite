import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ArrowRight, ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const {loopNum, setLoopNum} = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["'Web Developer", "Penetration Tester", "IoT Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);  

    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return() => { clearInterval(ticker)};

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate(i);
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);z
    }

    return(
        <section className="banner"  id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my website</span>
                        <h1>{`Hi I'm Ansh`}<span className="wrap">Web</span>web developer</h1>
                        <p>A web developer, cybersecurity enthusiast, social media manager and what not</p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col  xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
