import { Col, Row } from "react-bootstrap"

export const Banner = () => {
    return(
        <section className="banner"  id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my website</span>
                        <h1>{`Hi I'm Ansh`}<span className="wrap">Web</span>web developer</h1>
                        <p>A web developer, cybersecurity enthusiast, social media manager and what not</p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
