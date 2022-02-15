import React from "react";
import { Button ,Navbar,Container,Row,Col,Card} from 'react-bootstrap'

const Originals=()=>{
    return(
        <div>
            <Container>
            <h4 className="text-light pt-4">Originals</h4>
                <Row xs={2} md={4} className="py-2">
                    <Col>
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/badging2.jpg" />
                        </Card>
                    </Col>
                    <Col>
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/badging.jpg" />
                        </Card>
                    </Col>
                    <Col className="mt-3 mt-md-0">
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/badging7.jpg" />
                        </Card>
                    </Col>
                    <Col className="mt-3 mt-md-0">
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/badging6.jpg" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Originals;