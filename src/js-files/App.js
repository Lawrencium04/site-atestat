import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Construction from "./construction";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../css-files/App.css";
import Navbar from "../js-files/navbar.js";;

export default function App() {
	let [transition, setTransition] = useState(false);
	let [page, setPage] = useState(2);

	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	function nextPage(index) {
		if (index === page)
			return;
			
		setTransition(true);
		setTimeout(() => {
			setTransition(false);
			setPage(index);
		}, 500);
	}

	return (
		<>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								<Navbar setPage={(index) => nextPage(index)} />
								{page === 1 && <Home transition={transition}/>}
								{page === 2 && <Construction transition={transition}/>}
								{page === 3 && <Home transition={transition}/>}
								<Particles
									id="particles"
									init={particlesInit}
									loaded={particlesLoaded}
									params={{
                                        fps_limit: 60,
										particles: {
											number: {
												value: 120,
												density: { 
													enable: true, 
													area: 600 
												}
											},

											color: {
												value: "#808080",
											},

											links: {
                                                distance: 120,
												color: {
													value: "#808080",
												},
												enable: true,
												opacity: 0.5,
											},

											move: {
												enable: true,
                                                speed: 0.3
											},

											opacity: {
												value: 0.2,
											},

											size: {
												value: 1,
											},
										},
									}}
								/>
							</>
						}
					/>
				</Routes>
		</>
	);
}
