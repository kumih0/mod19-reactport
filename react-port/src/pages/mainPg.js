import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Container from "react-bootstrap/esm/Container";

const Main = () => {
    return (
        <Container className="main">

            <Home />
            <About />
            <Contact />

        </Container>
    );
};

export default Main;