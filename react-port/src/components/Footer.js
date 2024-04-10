import React from 'react';
import Container from 'react-bootstrap/esm/Container';

// TODO: css styles for ul social footer 
const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <Container>
                <div class="socials">

                    <ul>
                        <li><a href="#"><i class="bi bi-github"></i></a></li>
                        <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                        <li><a href="#"><i class="bi bi-youtube"></i></a></li>
                        <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                    </ul>

                </div>
                <p>Copyright &copy; KT Eddy 2024. All Rights Reserved</p>
            </Container>
        </footer>
    );
};

export default Footer;