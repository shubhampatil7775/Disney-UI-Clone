import React from "react";
import Wrap from './effects/Hover';
import { Button ,Navbar,Container,Col,Card,Row} from 'react-bootstrap'

const Trending=()=>{
    return (
        <div>
            <Container>
            <h4 className="text-light bg-md-dark pt-3">Trending</h4>
                <Row xs={2} md={4} className="py-3">
                    <Col>
                        <Wrap>
                        <Card style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale5.jpg" />
                        </Card>
                        </Wrap>
                    </Col>
                    <Col>
                        <Wrap>
                        <Card style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale18.jpg" />
                        </Card>
                        </Wrap>
                    </Col>
                    <Col className="mt-3 mt-md-0">
                        <Wrap>
                        <Card style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale4.jpg" />
                        </Card>
                        </Wrap>
                    </Col>
                    <Col className="mt-3 mt-md-0">
                        <Wrap>
                        <Card style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale14.jpg" />
                        </Card>
                        </Wrap>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending;