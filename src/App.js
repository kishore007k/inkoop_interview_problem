import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
import Cuisine from "./pages/Cuisine";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Book from "./pages/Book";

const App = () => {
	return (
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/services" exact component={Services} />
			<Route path="/cuisine" exact component={Cuisine} />
			<Route path="/gallery" exact component={Gallery} />
			<Route path="/contact" exact component={Contact} />
			<Route path="/book" exact component={Book} />
		</Switch>
	);
};

export default App;
