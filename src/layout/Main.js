import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightSidebar from '../Shared/Sidebar/RightSidebar/RightSidebar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="9">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSidebar></RightSidebar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;