import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Acoustic from "./acoustic";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../css-files/App.css";
import Navbar from "../js-files/navbar.js";;

export default function App() {
	let [transition, setTransition] = useState(true);
	let [page, setPage] = useState(1);

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
		setTransition(false);
		setTimeout(() => {
			setTransition(true);
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
								{page === 2 && <Acoustic transition={transition}/>}
								{page === 3 && <Home transition={transition}/>}
								{page === 4 && <Home transition={transition}/>}
								<Particles
									id="particles"
									init={particlesInit}
									loaded={particlesLoaded}
									params={{
                                        fps_limit: 60,
                                        interactivity: {
                                            detect_on: "window",
                                            events: {
                                                onHover: {
                                                    enable: false,
                                                    mode: "repulse",
                                                }
                                            },
                                            modes: {
                                                repulse: { distance: 130, duration: 0.4, factor: 8 }
                                            },
                                        },
										background: {
											opacity: 1,
										},
										particles: {
											number: {
												value: 100,
												density: { 
													enable: true, 
													area: 600 
												}
											},

											color: {
												value: "#000",
											},

											links: {
                                                distance: 120,
												color: {
													value: "#000",
												},
												enable: true,
												opacity: 0.5,
											},

											move: {
												enable: true,
                                                speed: 0.9
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
