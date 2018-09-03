import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const Services = ({ services }) => (
	<section className="mb-0" id="services">
		<div className="container">
			<h2 className="text-center text-uppercase animate-bottom">Services</h2>
			<hr className="star-dark mb-5" />
				<div className="row">
					{services.map(service => (
					<div key={v4()} className="col-lg-4 mb-lg-0 mb-sm-5 ml-auto animate-left text-center">
						<div className="icon text-center mb-4">
							<i className="fa fa-fw fa-4x fa-chart-line"> </i>
						</div>
						<h3>{service.headline}</h3>
						<p>{service.description}</p>
					</div>
					))}
				</div>
		</div>
	</section>
);

Services.propTypes = {
	services: PropTypes.arrayOf(
		PropTypes.shape({
			headline: PropTypes.string,
			description: PropTypes.string
		})
	)
};

export default Services
