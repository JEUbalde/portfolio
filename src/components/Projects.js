import { Col, Container, Row, Card, Button } from "react-bootstrap";


export default function Projects(){

    return(
        <Container className="py-5" id="projects">
            <Row>
                {/* Column for Graphic Design */}
                <Col className="d-flex justify-content-center align-items-center flex-md-row flex-column">
                    <Card className="mx-3 my-2 projectsCard" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./images/Pentool-bro.svg" className="my-5" />
                        <Card.Body>
                            <Card.Title className="text-center fw-bold">Graphic Design</Card.Title>
                            <Card.Text className="text-center mb-5">
                            Here are my works in graphic design using Photoshop and Illustrator uploaded in Behance.
                            </Card.Text>
                            <Button className="d-flex justify-content-center" variant="primary" href="https://www.behance.net/johnedubalde" target="_blank" rel="noreferrer">Click to View</Button>
                        </Card.Body>
                    </Card>

                    <Card className="mx-3 my-2 projectsCard" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./images/Static-website-pana.svg" className="my-5" />
                        <Card.Body>
                            <Card.Title className="text-center fw-bold">Static Website</Card.Title>
                            <Card.Text className="text-center mb-5">
                            A static website made from HTML and CSS. This website is created as part of Zuitt's capstone projects.
                            </Card.Text>
                            <Button className="d-flex justify-content-center" variant="primary" href="https://jeubalde.github.io/webportfolio/" target="_blank" rel="noreferrer">Click to View</Button>
                        </Card.Body>
                    </Card>

                    <Card className="mx-3 my-2 projectsCard" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./images/Development-cuate.svg" className="my-5" />
                        <Card.Body>
                            <Card.Title className="text-center fw-bold">E-Commerce App</Card.Title>
                            <Card.Text className="text-center mb-5">
                            Sooboonit is an e-commerce app that sells K-Pop merch made using Express.js, Node.js, and React.js.
                            </Card.Text>
                            <Button className="d-flex justify-content-center" variant="primary" href="https://ecommerce-iota-virid.vercel.app/" target="_blank" rel="noreferrer">Click to View</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}