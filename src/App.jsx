import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductionHouses from "./components/ProductionHouses.js"
import { Button ,Navbar,Container} from 'react-bootstrap'

function App() {
	return (
		<div className="App">
			<header className="App-header">
			<Navbar variant="dark" expand="lg" style={{ background: "#040714" }}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src="/assets/images/logo.svg" width="60" alt="Disney+" />
                    </Navbar.Brand> 
                     <Button size="sm" variant="outline-light">LOGIN</Button>
                </Container>
            </Navbar>
			<ProductionHouses/>

			</header>
	
		</div>
	)
}

export default App
