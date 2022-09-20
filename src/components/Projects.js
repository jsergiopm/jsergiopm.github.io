import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from 'react-on-screen';


export const Projects = () =>{
    const projects =[
        {
            title:"Bussines startup",
            description:"Desing & Development",
            imgUrl: projImg1,
        },
        {
            title:"Bussines startup",
            description:"Desing & Development",
            imgUrl: projImg2,
        },
        {
            title:"Bussines startup",
            description:"Desing & Development",
            imgUrl: projImg3,
        },
        {
            title:"Bussines startup",
            description:"Desing & Development",
            imgUrl: projImg1,
        },
        {
            title:"Bussines startup",
            description:"Desing & Development",
            imgUrl: projImg2,
        },
        {
            title:"Bussines startup",
            description:"Desing & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>
                            Projects
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem dolor. Nunc rutrum lacus sit amet tellus bibendum, quis dignissim nunc porta. Etiam dignissim hendrerit ipsum et imperdiet. Phasellus nisl arcu, interdum eget accumsan eget, tristique a tellus. Nullam et dolor mattis,
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                                </Nav>
                            <Tab.Content >
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}