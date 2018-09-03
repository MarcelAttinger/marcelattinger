import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = ({headline, leftText, rightText}) => (
	<section className="mb-0 bg-primary text-white" id="about">
		<div className="container">
			<h2 className="text-center text-uppercase text-white animate-bottom">{headline}</h2>
			<hr className="star-light mb-5"/>
			<div className="row">
				<div className="col-lg-4 ml-auto animate-left">
					<p className="lead">{leftText}</p>
				</div>
				<div className="col-lg-4 mr-auto animate-right">
					<p className="lead">{rightText}</p>
				</div>
			</div>
		</div>
	</section>
)

AboutMe.propTypes = {
	headline: PropTypes.string,
	leftText: PropTypes.string,
	rightText: PropTypes.string
};

export default AboutMe
