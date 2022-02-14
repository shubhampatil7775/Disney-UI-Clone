import React from 'react'
import { Button ,Navbar,Container,Row,Col,Card} from 'react-bootstrap'

const ProductionHouses=()=>{
    return(
        <div>
             <Container>
                <div xs={1} md={5} className="py-0 py-md-3 row">
                    <div className="mt-3 mt-md-0 col">
                        <div border="light" style={{ background: "transparent" },{borderColor:"red"}}>
                            <Card.Img variant="top" src="/assets/images/scale17.jpg" />
                        </div>
                    </div>
                    <div className="mt-3 mt-md-0 col">
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale10.jpg" />
                        </Card>
                    </div>
                    <div className="mt-3 mt-md-0 col">
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale7.jpg" />
                        </Card>
                    </div>
                    <div className="mt-3 mt-md-0 col">
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale2.jpg" />
                        </Card>
                    </div>
                    <div className="mt-3 mt-md-0 col">
                        <Card border="light" style={{ background: "transparent" }}>
                            <Card.Img variant="top" src="/assets/images/scale8.jpg" />
                        </Card>
                    </div>
                </div>
                </Container>
           
        </div>
    )
}

export default ProductionHouses;