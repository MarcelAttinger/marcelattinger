import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const Testimonials = ({testimonials}) => (
	<div>
		<section className="clients bg-primary text-white" id="clients">
			<div className="container">
				<h2 className="text-center text-uppercase mb-0 text-white animate-bottom">Testimonials</h2>
				<hr className="star-light mb-5" />
				<div className="row">
					<div className="col-lg-8 col-md-12 clients-slider text-center">
						{testimonials.map(testimonial => (
							<div key={v4()} className="slide mb-3">
								<blockquote>
									<p className="mb-5 lead animation-left"> {testimonial.quote}</p>
									<footer className="client-info animation-right">
										<cite>
											<img src="img/testimonials/kevinkirr.jpg" alt="Kevin und Lena"/>
											<span className="text">
			                                    <strong className="lead">{testimonial.author}</strong>
			                                    <a className="text-white" href="http://kl-hochzeit.info/"
			                                       title="http://kl-hochzeit.info/">Link zur Website</a>
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
	</div>
)

Testimonials.propTypes = {
	testimonials: PropTypes.arrayOf(
		PropTypes.shape({
			quote: PropTypes.string,
			author: PropTypes.string,
		})
	),
}

export default Testimonials
