import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightSidebar from '../Shared/Sidebar/RightSidebar/RightSidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="10">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="2">
                        <RightSidebar></RightSidebar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;