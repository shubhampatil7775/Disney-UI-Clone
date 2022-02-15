import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar';
import ImageSlider from './components/ImageSlider';
import ProductionHouses from './components/ProductionHouses';

function App() {
	return (
		<div className="App">
			<MenuBar />
			<ImageSlider/>
			<ProductionHouses/>
		</div>
	)
}

export default App
