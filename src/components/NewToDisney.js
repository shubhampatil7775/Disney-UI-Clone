import React from "react";
import Wrap from './effects/Hover';
import { Button ,Navbar,Container,Row,Col,Card} from 'react-bootstrap'

const NewToDisney=()=>{
    return (
        <div>
            <Container>
            <h4 className="text-light pt-4">New to Disney+</h4>
                <Row xs={2} md={4} className="py-2">
                    <Col>
                        <Wrap>
                        <Card style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale9.jpg" />
                        </Card>
                        </Wrap>
                    </Col>
                    <Col>
                        <Wrap>
                        <Card style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale15.jpg" />
                        </Card>
                        </Wrap>
                    </Col>
                    <Col className="mt-3 mt-md-0">
                        <Wrap>
                        <Card  style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/badging3.jpg" />
                        </Card>
                        </Wrap>
                    </Col>
                    <Col className="mt-3 mt-md-0">
                        <Wrap>
                        <Card style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale13.jpg" />
                        </Card>
                        </Wrap>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default NewToDisney;