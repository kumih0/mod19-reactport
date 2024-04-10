import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Container from "react-bootstrap/esm/Container";

// TODO: correct home so it fills space etc.
const Main = () => {
    return (
        <>
            <Home />

            <Container className="main">

                <About />
                <Contact />

            </Container>
        </>
    );
};

export default Main;