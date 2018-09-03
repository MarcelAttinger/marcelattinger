import React from 'react';
import profile from '../img/hello.jpg';

const Masthead = ({image, name, claim}) => (
	<header className="masthead bg-primary text-white text-center">
		<div className="container">
			<img className="img-fluid mb-5 d-block mx-auto" src={image} alt="" />
				<h1 className="text-uppercase mb-0">{name}</h1>
				<hr className="star-light" />
					<h2 className="font-weight-light mb-0">{claim}</h2>
		</div>
	</header>
);

export default Masthead
