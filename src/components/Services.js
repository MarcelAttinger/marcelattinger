import React from 'react';
import PropTypes from 'prop-types';

const Services = ({ data }) => (
	<section className="mb-0" id="services">
		<div className="container">
			<h2 className="text-center text-uppercase animate-bottom">Services</h2>
			<hr className="star-dark mb-5" />
				<div className="row">
					<div className="col-lg-4 mb-lg-0 mb-sm-5 ml-auto animate-left text-center">
						<div className="icon text-center mb-4">
							<i className="fa fa-fw fa-4x fa-chart-line"> </i>
						</div>
						<h3>Alles beginnt mit einer guten Konzeption!</h3>
						<p>Wir legen in einem ausführlichem Gespräch
						   gemeinsam die Ziele für deinen Webauftritt fest. Auf dieser Basis erarbeite ich für dich
						   ein maßgeschneidertes Konzept.</p>
					</div>
					<div className="col-lg-4 mb-lg-0 mb-sm-5 ml-auto animate-left text-center">
						<div className="icon text-center mb-4">
							<i className="fa fa-fw fa-4x fa-pencil-alt"> </i>
						</div>
						<h3> Design verbindet Information und Verstehen!</h3>
						<p>Lorem Ipsum</p>
					</div>
					<div className="col-lg-4 ml-auto animate-left text-center">
						<div className="icon text-center mb-4">
							<i className="fa fa-fw fa-4x fa-laptop"> </i>
						</div>
						<h3>Umsetzung Zitat</h3>
						<p>Lorem Ipsum</p>
					</div>
				</div>
		</div>
	</section>
)

Services.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			plan: PropTypes.string,
			price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			description: PropTypes.string,
			items: PropTypes.array,
		})
	),
}

export default Services
