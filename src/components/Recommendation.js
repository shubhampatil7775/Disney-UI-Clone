import React from "react"
import Wrap from './effects/Hover';
import { Button ,Navbar,Container,Row,Col,Card} from 'react-bootstrap'

const Recommendation=()=>{
    return(
        <div>
            <Container>
        <h4 className="text-light pt-4">Recommended for you</h4>
                <Row xs={2} md={4} className="py-2">
                    <div className="col">
                        <Wrap>
                        <Card style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale11.jpg" />
                        </Card>
                        </Wrap>
                    </div>
                    <Col>
                        <Wrap>
                        <Card style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale3.jpg" />
                        </Card>
                        </Wrap>
                    </Col>
                    <Col className="mt-3 mt-md-0">
                        <Wrap>
                        <Card style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale12.jpg" />
                        </Card>
                        </Wrap>
                    </Col>
                    <Col className="mt-3 mt-md-0">
                        <Wrap>
                        <Card style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale.jpg" />
                        </Card>
                        </Wrap>
                    </Col>
                </Row>
                </Container>
        </div>
    )
}

export default Recommendation