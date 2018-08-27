import React from 'react';
import Link from 'gatsby-link';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
	<div className="container">
	<a className="navbar-brand js-scroll-trigger" href="#page-top">Marcel Attinger</a>
	<button
		className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
		type="button"> Menu
		<i className="fa fa-bars">lorem</i>
	</button>
	<div className="collapse navbar-collapse" id="navbarResponsive">
	<ul className="navbar-nav ml-auto">
		<li className="nav-item mx-0 mx-lg-1">
			<a
				className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
				href="#services">
					Leistungen
			</a>
		</li>
		<li className="nav-item mx-0 mx-lg-1">
			<a
				className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
				href="#about" >
					Über mich
			</a>
		</li>
		<li className="nav-item mx-0 mx-lg-1">
			<a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
		</li>

		<li className="nav-item mx-0 mx-lg-1">
			<a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#clients">Testimonials</a>
		</li>
		<li className="nav-item mx-0 mx-lg-1">
			<a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Kontakt</a>
		</li>
	</ul>
	</div>
  </div>
</nav>

// <nav className="navbar is-transparent">
// 	<div className="container">
// 	<div className="navbar-brand">
// 	<Link to="/" className="navbar-item">
// 	<figure className="image">
// 	<img src={logo} alt="Kaldi" style={{ width: '88px' }} />
// </figure>
// </Link>
// </div>
// <div className="navbar-start">
// 	<Link className="navbar-item" to="/about">
// 	About
// 	</Link>
// 	<Link className="navbar-item" to="/products">
// 	Products
// 	</Link>
// 	</div>
// 	<div className="navbar-end">
// 	<a
// className="navbar-item"
// href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
// target="_blank"
// rel="noopener noreferrer"
// 	>
// 	<span className="icon">
// 	<img src={github} alt="Github" />
// 	</span>
// 	</a>
// 	</div>
// 	</div>
// 	</nav>
);

export default Navbar
