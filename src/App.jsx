import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar';
import ImageSlider from './components/ImageSlider';
import ProductionHouses from './components/ProductionHouses';
import Recommendation from './components/Recommendation';
import NewToDisney from './components/NewToDisney';
import Originals from './components/Originals';
import Trending from './components/Trending';

function App() {
	return (
		<div className="App">
			<MenuBar />
			<ImageSlider/>
			<ProductionHouses/>
			<Recommendation/>
			<NewToDisney/>
			<Originals/>
			<Trending/>
		</div>
	)
}

export default App
