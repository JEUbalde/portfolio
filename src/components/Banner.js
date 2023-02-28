import { Container } from "react-bootstrap";



export default function Banner(){

    return(
        <Container fluid className=" banner">
            <div className="introStatement">
                <p className="mt-5 col-md-7 col-lg-10">Hi, I'm Edward. Nice to meet you!</p>
                <img src="./images/Programmer-bro.svg" alt="gif of programmer writing code" className="col-11 col-md-7 col-lg-5" />
            </div>
        </Container>
    );
}