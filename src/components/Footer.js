import { Col, Row } from "react-bootstrap";


export default function Footer(){

    return(
        <footer className="mx-auto footer py-4">
            <Row className="d-flex flex-column">
                <Col className="d-flex justify-content-center align-items-end">
                    
                    <a href="https://www.linkedin.com/in/john-edward-ubalde/" target="_blank" rel="noreferrer" className="mx-2">
                        <img style={{width: "25px"}} src="./images/1652445661linkedin-social-media-svgrepo-com.svg" alt="LinkedIn icon" />
                    </a>

                    <a href="mailto:johnedward.ubalde@gmail.com" target="_blank" rel="noreferrer" className="mx-2">
                        <img style={{width: "20px"}} src="./images/email-svgrepo-com.svg" alt="email icon" />
                    </a>
                </Col>

                <Col className="mt-2 text-center">
                    <p>Made by John Edward Ubalde &copy;2023</p>
                </Col>
            </Row>
        </footer>
    );
}