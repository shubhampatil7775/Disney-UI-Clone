import React from "react";
import { Button ,Navbar,Container,Col,Card,Row} from 'react-bootstrap'

const Trending=()=>{
    return (
        <div>
            <Container>
            <h4 className="text-light bg-md-dark pt-3">Trending</h4>
                <Row xs={2} md={4} className="py-2">
                    <div className="col">
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale5.jpg" />
                        </Card>
                    </div>
                    <div className="col">
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale18.jpg" />
                        </Card>
                    </div>
                    <div className="col" className="mt-3 mt-md-0">
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale4.jpg" />
                        </Card>
                    </div>
                    <div className="col" className="mt-3 mt-md-0">
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale14.jpg" />
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Trending;