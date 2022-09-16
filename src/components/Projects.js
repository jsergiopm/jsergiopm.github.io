import { Col, Container } from "react-bootstrap";

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
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Projects
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem dolor. Nunc rutrum lacus sit amet tellus bibendum, quis dignissim nunc porta. Etiam dignissim hendrerit ipsum et imperdiet. Phasellus nisl arcu, interdum eget accumsan eget, tristique a tellus. Nullam et dolor mattis,
                        </p>
                        <Tab.Container id="projects-tabs">
                            <Nav variant="pills" defaultActiveKey="/home">
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
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}