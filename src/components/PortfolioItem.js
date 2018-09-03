import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

const PortfolioItem = ({portfolioItems}) => (
	<div>
		{portfolioItems.map((project, index) => (
		<div key={v4()} className="portfolio-modal mfp-hide" id={"portfolio-modal-" + index}>
			<div className="portfolio-modal-dialog bg-white">
				<a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
					<i className="fa fa-3x fa-times"> </i>
				</a>
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<a href={project.item.linkTarget} target="_blank" title="http://kl-hochzeit.info/">
								<img src={project.item.image} alt={project.item.imageAlt} />
							</a>
						</div>

						<div className="col-lg-7">
							<h2 className="text-uppercase mb-0 text-center">{project.item.headline}</h2>
							<hr className="star-dark mb-5" />
								<p className="lead mb-5">
									{project.item.description}
								</p>

								<div className="testimonial mb-5">
									<h3>{project.item.testimonialHeadline}</h3>
									<ul>
										{project.item.testimonialList.map(items => (
										<li key={v4()}><p className="lead">{items.listItem}</p></li>
										))}
									</ul>
								</div>
								<div className="technical-details">
									<h3>{project.item.technicalHeadline}</h3>
									<p className="lead">{project.item.technicalDescription}</p>
								</div>
								<a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
									<i className="fa fa-close"> </i>Schließen</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		))}
	</div>
)

PortfolioItem.propTypes = {
	portfolioItems: PropTypes.arrayOf(
		PropTypes.shape({
			linkTarget: PropTypes.string,
			image: PropTypes.string,
			imageAlt: PropTypes.string,
			headline: PropTypes.string,
			description: PropTypes.string,
			testimonialHeadline: PropTypes.string,
			testimonialList: PropTypes.arrayOf(
				PropTypes.shape({
					listItem: PropTypes.string
				})
			),
			technicalHeadline: PropTypes.string,
			technicalDescription: PropTypes.string
		})
	)
};

export default PortfolioItem