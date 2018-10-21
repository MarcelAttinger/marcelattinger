import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import Logo from '../img/Glückskorn_gross.jpg';
import stagePic from '../img/stage.jpg';


export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	toggleMenu() {
		document.querySelector('.main-navigation').classList.toggle('open');
	}

	render(){

		return(
			<header>
				<div className="image-wrapper">
					<img src={stagePic} alt="Lorem"/>
				</div>
				<div className="header-bottom">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="logo-wrapper">
									<Link to="/">
										<div id="logo">
											<img src={Logo} alt="Logo Test"/>
										</div>
									</Link>
								</div>
								<nav className="main-navigation">
									<div onClick={this.toggleMenu} className="menu-toggle fa fa-bars">Menu</div>
									<div onClick={this.toggleMenu} className="close fa fa-times">Close</div>
									<ul className="floating">
										<li>
											<Link to="/">Das sind wir</Link>
										</li>
										<li>
											<Link to="/product-overview">Das machen wir</Link>
										</li>
										<li>
											<Link to="/recipe-overview">Das kannst du daraus machen</Link>
										</li>
										<li>
											<a href="#">Das ist uns wichtig</a>
										</li>
										<li>
											<Link to="/contact/">Hier findest du uns</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

