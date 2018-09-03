import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

const Portfolio = ({portfolio}) => (
	<div>
		<section className="portfolio" id="portfolio">
			<div className="container">
				<h2 className="text-center text-uppercase animate-bottom">Portfolio</h2>
				<hr className="star-dark mb-5"/>
				<div className="row">
					{portfolio.map((project, index) => (
						<div key={v4()} className="col-lg-4 col-md-6">
							<a href={"#portfolio-modal-" + index} className="portfolio-item">
								<img src={project.image} alt={project.imageAlt}/>
							</a>
						</div>
						))}
				</div>
			</div>
		</section>
	</div>
)

Portfolio.propTypes = {
	portfolio: PropTypes.arrayOf(
		PropTypes.shape({
			image: Portfolio.string,
			imageAlt: PropTypes.string
		})
	)
};

export default Portfolio
