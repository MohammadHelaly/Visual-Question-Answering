import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			// className={`${
			// 	styles["my-nav"]
			// } navbar navbar-expand-lg fixed-top navbar-dark ${
			// 	scrolled ? styles["my-new-nav"] : ""
			// }`}
			className={`${
				styles["my-nav"]
			} navbar navbar-expand-lg fixed-top navbar-dark ${
				scrolled ? "bg-dark" : ""
			}`}
			//
		>
			<div className="container topnav-container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto text-center">
						<li className="nav-item">
							<a
								className="nav-link custom-link text-light"
								href="#vqna">
								Try VQnA
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link custom-link text-light"
								href="#about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link custom-link text-light"
								href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
