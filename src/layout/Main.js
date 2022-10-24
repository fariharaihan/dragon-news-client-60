import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheare/Footer/Footer';
import Header from '../Pages/Sheare/Header/Header';
import LeftsideNav from '../Pages/Sheare/LeftsideNav/LeftsideNav';
import RightsideNav from '../Pages/Sheare/RightsideNav/RightsideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftsideNav></LeftsideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightsideNav></RightsideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;