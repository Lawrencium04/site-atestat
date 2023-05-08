import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Construction from "./construction";
import Tops from "./tops";
import "../css-files/App.css";
import Navbar from "../js-files/navbar.js";;

export default function App() {

	return (
		<>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								<Navbar/>
								<Home/>
								<Construction/>
								<Tops/>
							</>
						}
					/>
				</Routes>
		</>
	);
}
