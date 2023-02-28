import { Container, Row, Col } from "react-bootstrap";



export default function AboutMe(){

    return(
        <Container className="py-5" id="aboutMe">
            <Row className="d-flex justify-content-center align-items-center mx-auto flex-column flex-lg-row">
                <Col className="d-flex justify-content-center">
                    <img src="./images/IMG_1445-square.jpg" alt="gJohn Edward Ubalde in toga" className="col-8 col-md-4 col-lg-8 profile mb-5"/>
                </Col>
                <Col className=" col-10 col-lg-7 px-lg-5">
                    <h1 className="fw-bold text-center">Edward Ubalde who?</h1>
                    <p className="fs-5 text-center">Hi! I'm John Edward Ubalde, a creative who wants to dive in technology and explore the realms of design and experience. A software engineer with the ability to design and collaborate with a team of various backgrounds in a rapidly growing industry. I studied in Zuitt to learn the ways of a Full-Stack (MERN Stack) Web Developer.</p>
                </Col>
            </Row>
        </Container>
    );
}