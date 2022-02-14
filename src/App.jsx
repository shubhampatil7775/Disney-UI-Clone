import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar';
import ImageSlider from './components/ImageSlider';

function App() {
	return (
		<div className="App">
			<MenuBar />
			<ImageSlider />
		</div>
	)
}

export default App
