import React from 'react';
import profile from '../img/hello.jpg';

const Masthead = () => (
	<header className="masthead bg-primary text-white text-center">
		<div className="container">
			<img className="img-fluid mb-5 d-block mx-auto" src={profile} alt="" />
				<h1 className="text-uppercase mb-0">Marcel Attinger</h1>
				<hr className="star-light" />
					<h2 className="font-weight-light mb-0">Grafik Designer - Web Entwickler - User Experience Developer</h2>
		</div>
	</header>
);

export default Masthead
