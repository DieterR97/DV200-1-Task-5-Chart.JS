import React from "react";
// import bootstrap elements Container, Nav and Navbar for My Navbar
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import '../App.css'

function MyNavbar() {
    return (
        // A basic bootstrap Navbar
        <Navbar bg='dark' variant="dark">
            <Container>
                {/* Home */}
                <Navbar.Brand href="/">Task 5: Chart.JS</Navbar.Brand>
                {/* 5 Pages for 5 Charts */}
                <Nav className="m-auto">
                    <Nav.Link href="/">Bar Chart</Nav.Link>
                    <Nav.Link href="/line">Line Chart</Nav.Link>
                    <Nav.Link href="/pie">Pie Chart</Nav.Link>
                    <Nav.Link href="/polar">PolarArea Chart</Nav.Link>
                    <Nav.Link href="/radar">Radar Chart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

// export My Navbar
export default MyNavbar;