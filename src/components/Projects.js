import { Col, Container, Row, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";



export const Projectss = () => {

    const projects  = [
        {
            title: "Election Management system",
            description: "Backend",
            imgUrl: projImg1,
        }
    ]
    return(
        <section className="project" id='projects'>
            <Container>
                <Row>
                    <Col>
                    <h2>A full stack web application to manage elections digitally</h2>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((projects, index) => {
                                    return (
                                        <p>{projects.title}</p>
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                    </Col>  
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
