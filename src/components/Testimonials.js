import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

const Testimonials = ({testimonials}) => (
	<section className="clients bg-primary text-white" id="clients">
		<div className="container">
			<h2 className="text-center text-uppercase mb-0 text-white">Testimonials</h2>
			<hr className="star-light mb-5"/>
			<div className="row">
				<div className="col-lg-8 col-md-12 clients-slider text-center">
					{testimonials.map(testimonial => (
						<div key={v4()} className="slide mb-3">
							<blockquote>
								<p className="mb-5 lead"> {testimonial.quote}</p>
								<footer className="client-info">
									<cite>
										<img src={testimonial.image} alt={testimonial.imageAlt}/>
										<span className="text">
			                                    <strong className="lead">{testimonial.author}</strong>
			                                    <a className="text-white" href={testimonial.linkTarget}
			                                       title="http://kl-hochzeit.info/">test</a>
			                                </span>
									</cite>
								</footer>
							</blockquote>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
)

Testimonials.propTypes = {
	testimonials: PropTypes.arrayOf(
		PropTypes.shape({
			quote: PropTypes.string,
			author: PropTypes.string,
			image: PropTypes.string,
			imageAlt: PropTypes.string,
			linkTarget: PropTypes.string
		})
	)
};

export default Testimonials
