import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Header from "./components/header/Header";
//import Nav from "../nav/Nav";
//import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
//import Testimonials from "./components/testimonials/Testimonials";
import { Fragment } from "react";

const App = () => {
	return (
		<Fragment>
			<div>
				<Navbar />
				<Header />
				<About />
				<Skills />
				<Projects />
				<Footer />
			</div>
		</Fragment>
	);
};

export default App;
