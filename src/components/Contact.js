import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({data}) => (
	<section id="contact">
		<div className="container">
			<h2 className="text-center text-uppercase mb-0 animate-bottom">Schnelle Kontaktaufnahme!</h2>
			<hr className="star-dark mb-5"/>
			<div className="row">
				<div className="col-lg-8 mx-auto">
					<p className="lead text-center">Trage einfach deinen Namen und Telefonnummer ein und ich melde mich
					                                bei dir
					                                zurück!</p>
				</div>
			</div>
			<form name="sentMessage" id="contactForm">
				<div className="row">
					<div className="col-lg-6 mb-5">
						<div className="control-group">
							<div className="form-group floating-label-form-group controls mb-0 pb-2">
								<label>Name</label>
								<input className="form-control" id="name" type="text" placeholder="Name"
								       required="required"
								       data-validation-required-message="Please enter your name."/>
								<p className="help-block text-danger"></p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mb-5">
						<div className="control-group">
							<div className="form-group floating-label-form-group controls mb-0 pb-2">
								<label>Telefonnummer</label>
								<input className="form-control" id="phone" type="tel" placeholder="Telefonnummer"
								       required="required"
								       data-validation-required-message="Please enter your phone number."/>
								<p className="help-block text-danger"></p>
							</div>
						</div>
					</div>
					<br />
					<div className="col-lg-12 text-center">
						<div id="success"></div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Senden
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</section>
)

Contact.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			plan: PropTypes.string,
			price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			description: PropTypes.string,
			items: PropTypes.array,
		})
	),
}

export default Contact
