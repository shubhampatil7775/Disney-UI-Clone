import React from 'react'
import Wrap from './effects/Hover';
import { Button, Navbar, Container, Row, Col, Card } from 'react-bootstrap'

const ProductionHouses = () => {
    return (
        <div>
            <Container>
                <div xs={1} md={5} className="py-0 py-md-3 row">
                    <div className="mt-3 mt-md-0 col">
                        <Wrap>
                            <Card style={{ background: "transparent" }}>
                                <Card.Img variant="top" src="/assets/images/scale17.jpg" />
                            </Card>
                        </Wrap>
                    </div>
                    <div className="mt-3 mt-md-0 col">
                        <Wrap>
                            <Card  style={{ background: "transparent" }}>
                                <Card.Img variant="top" src="/assets/images/scale10.jpg" />
                            </Card>
                        </Wrap>
                    </div>
                    <div className="mt-3 mt-md-0 col">
                        <Wrap>
                            <Card style={{ background: "transparent" }}>
                                <Card.Img variant="top" src="/assets/images/scale7.jpg" />
                            </Card>
                        </Wrap>
                    </div>
                    <div className="mt-3 mt-md-0 col">
                        <Wrap>
                            <Card style={{ background: "transparent" }}>
                                <Card.Img variant="top" src="/assets/images/scale2.jpg" />
                            </Card>
                        </Wrap>
                    </div>
                    <div className="mt-3 mt-md-0 col">
                        <Wrap>
                            <Card  style={{ background: "transparent" }}>
                                <Card.Img variant="top" src="/assets/images/scale8.jpg" />
                            </Card>
                        </Wrap>
                    </div>
                </div>
            </Container>

        </div>
    )
}


export default ProductionHouses;