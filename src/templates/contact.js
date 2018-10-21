import React from 'react';
import Map from '../components/map-section';
import Header from '../components/header';

const ContactTemplate = () => {

	return (
		<div className="contact">
			<Header />

			<section className="grey-background">
				<div className="container">
					<div className="text-align">
						<h1 className="text-center">Erhältlich in über 10 Läden in der Region</h1>
					</div>
					<div className="row">
						<div className="col-lg-6">
							Die Arbeit mit unseren regionalen Partnerläden ist uns sehr wichtig. Hier schreiben wir noch mehr darüber wie unsere
							Produkte Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam animi consequatur officiis quas rerum sapiente tempore? Pariatur, quasi?
						</div>
						<div className="col-lg-6">
							Die Arbeit mit unseren regionalen Partnerläden ist uns sehr wichtig. Hier schreiben wir noch mehr darüber wie unsere
							Produkte Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam animi consequatur officiis quas rerum sapiente tempore? Pariatur, quasi?
						</div>
					</div>
				</div>
			</section>
			<Map />
		</div>
	)
};

export default ContactTemplate;